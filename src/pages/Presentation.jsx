import React from 'react';
import { useSpring, animated as a } from '@react-spring/web';
import me from '../assets/me.jpg';
import Background from '../components/Background';
import Zone01 from '../components/zone01';
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

function Presentation() {
    const [style, api] = useSpring(() => ({
        xys: [0, 0, 1],
        config: { mass: 5, tension: 350, friction: 40 },
    }));

    const calc = (x, y, rect) => {
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const rotateX = -(y - centerY) / 20;
        const rotateY = (x - centerX) / 20;
        return [rotateX, rotateY, 1.05];
    };

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const coords = calc(e.clientX, e.clientY, rect);
        api.start({ xys: coords });
    };

    const handleMouseLeave = () => {
        api.start({ xys: [0, 0, 1] });
    };

    return (
        <div className='bg-gradient-to-t from-gray-950 to-indigo-950 text-white relative'>
            <Background />

            <div className="relative w-full min-h-screen flex flex-col justify-center items-center px-4 sm:px-6" id="presentation">
                <div
                    className="relative w-full sm:w-4/5 md:w-2/3 lg:w-1/3 z-10"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{ perspective: '1000px' }}
                >
                    <a.div
                        className="rounded-xl shadow-lg p-6 sm:p-8 absolute top-0 left-0 w-full h-full pointer-events-none select-none"
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            boxShadow: '0 10px 30px rgba(255, 255, 255, 0.15)',
                            transform: style.xys.to(
                                (x, y, s) =>
                                    `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
                            ),
                            zIndex: 0,
                        }}
                    />
                    <a.div
                        className="rounded-xl shadow-lg bg-black/90 p-6 sm:p-8 relative"
                        style={{
                            transform: style.xys.to(
                                (x, y, s) =>
                                    `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
                            ),
                            zIndex: 1,
                        }}
                    >
                        <div className="flex items-center space-x-4 mb-4 align-center">
                            <div className="w-12 h-12 rounded-full overflow-hidden">
                                <img src={me} alt="me" className="w-full h-full object-cover" />
                            </div>
                            <h1 className="text-xl font-bold">Waahx_</h1>
                            <p className='text-gray-500'>11 Juin 2025 </p>
                        </div>

                        <div className="text-gray-300 space-y-3 text-base leading-relaxed">
                            <p>Bienvenue sur mon site !</p>
                            <span className='items-center inline-flex'>
                                Je m'appelle Clément et je suis étudiant au sein de l'école&nbsp;
                                <Zone01 />
                            </span>
                            <p>Je suis actuellement à la recherche d'une alternance de 2 ans pour ma poursuite d'étude en Master.</p>
                        </div>
                    </a.div>
                </div>
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer">
                <p className="text-gray-300 text-sm mt-2 mb-6 text-center">Voir mes projets</p>
                <a onClick={() => document.querySelector(`#projects`)?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-300 hover:text-white transition-colors duration-300">
                    <MdOutlineKeyboardDoubleArrowDown className="w-48 h-48 animate-bounce" />
                </a>
            </div>
        </div>
    );
}

export default Presentation;
