import React from 'react'
import me from '../assets/me.jpg'
import { motion } from "framer-motion"
import Background from '../components/Background'
import Zone01 from '../components/zone01'

function Presentation() {
    return (
        <div className='bg-gradient-to-t from-gray-950 to-indigo-950 text-white relative'>
            <Background />

            <div className="relative w-full min-h-screen flex flex-col justify-center items-center px-4 sm:px-6">
                <div className="bg-black/90 flex flex-col justify-start p-6 sm:p-8 rounded-xl w-full sm:w-4/5 md:w-2/3 lg:w-1/3 z-10 shadow-lg">
                    {/* Header */}
                    <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                            <img src={me} alt="me" className="w-full h-full object-cover" />
                        </div>
                        <h1 className="text-xl font-bold">Waahx_</h1>
                    </div>

                    {/* Texte */}
                    <div className="text-gray-300 space-y-3 text-base leading-relaxed">
                        <p>Bienvenue sur mon site ! </p>
                        <span className='items-center inline-flex'>Je m'appelle Clément et je suis étudiant au sein de l'école &nbsp;<Zone01 /></span>
                        <p>Je suis actuellement à la recherche d'une alternance de 2 ans pour ma poursuite d'étude en Master.</p>
                        <p>Vous pouvez retrouver ici tous mes projets de développement, mes projets bénévoles auxquels je participe sur mon temps libre, ainsi que mon CV.</p>
                    </div>

                    {/* Boutons */}
                    <div className="mt-6 flex flex-wrap gap-3">
                        <NavButton to="#projects">Projets</NavButton>
                        <NavButton to="#cv">CV</NavButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Presentation

function NavButton({ to, children }) {
    const handleClick = () => {
        const element = document.querySelector(to);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div
            className="relative rounded-lg bg-gray-800 shadow-xl w-fit h-fit cursor-pointer"
            onClick={handleClick}
        >
            <motion.div
                initial={{ transform: "translateZ(8px) translateY(-2px)" }}
                whileHover={{ transform: "translateZ(32px) translateY(-8px)" }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="rounded-lg border border-gray-700 bg-gray-900 p-1 hover:border-sky-500"
            >
                <div className="px-4 py-1 font-mono text-sm bg-gray-950 rounded-b-lg">
                    {children}
                </div>
            </motion.div>
        </div>
    );
}
