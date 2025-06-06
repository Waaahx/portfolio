import React, { useEffect, useState } from 'react';
import css from '../assets/css.png';
import go from '../assets/go.png';
import html from '../assets/html.png';
import js from '../assets/js.webp';
import rust from '../assets/rust.png';
import java from '../assets/java.png';
import python from '../assets/python.png';
import reactLogo from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
import mysql from '../assets/mysql.png';
import supabase from '../assets/supabase.png';
import sk from '../assets/sk.png';

const logos = [css, go, html, js, rust, java, python, reactLogo, tailwind, mysql, supabase, sk];

function FallingLogo({ logo, left, delay, top }) {
    return (
        <div
            className="absolute w-16 h-16 animate-fall"
            style={{
                left: `${left}px`,
                top: `${top}px`,
                animationDelay: `${delay}s`,
            }}
        >
            <div className="relative w-8 h-8">
                <img
                    className="absolute top-0 left-0 w-8 h-8 rounded opacity-50 translate-x-0 translate-y-2 -translate-z-9 rotate-x-[50deg] rotate-z-[30deg]"
                    src={logo}
                    draggable="false"
                    alt="logo reflection"
                />
                <img
                    className="absolute top-0 left-0 w-8 h-8 rounded -translate-z-8 rotate-x-[50deg] rotate-z-[30deg] shadow-md"
                    src={logo}
                    draggable="false"
                    alt="logo"
                />
            </div>
        </div>
    );
}



function Background() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const logosPerScreen = 65;

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="absolute top-0 left-0 w-full h-[300vh] overflow-hidden z-0 pointer-events-none">
            {Array.from({ length: logosPerScreen }).map((_, i) => {
                const logo = logos[Math.floor(Math.random() * logos.length)];
                const left = Math.random() * windowWidth;
                const delay = Math.random() * 25; // Décale le départ pour créer un flux irrégulier
                const top = Math.random() * -200 - 100;
                return <FallingLogo key={i} logo={logo} left={left} delay={delay} top={top}/>;
            })}
        </div>
    );
}

export default Background;
