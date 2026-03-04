import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import SocialIcons from './SocialIcons'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
    const navRef = useRef(null);

    useEffect(() => {
        // Only run animation on home page or if #about exists
        const aboutSection = document.querySelector('#about');
        if (!aboutSection) return;

        const ctx = gsap.context(() => {
            gsap.to(navRef.current, {
                y: '-100%',
                opacity: 0,
                duration: 1,
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: "#about",
                    start: "top top",
                    end: "top -50%",
                    scrub: 1, // "slowly up" effect tied to scroll
                    // markers: true // for debugging
                }
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div ref={navRef} className=" fixed top-0 left-0 right-0 z-50 w-full max-w-[95vw] md:max-w-[95vw] mt-2 mx-auto ">
            <nav className=' bg-black/40 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between px-2 md:px-6 py-3 md:py-4 rounded-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] gap-4 md:gap-0'>
                <div className="flex justify-center md:flex-1 w-full md:w-auto overflow-x-auto no-scrollbar">
                    <ul className='flex gap-6 md:gap-10 font-[Font-4] whitespace-nowrap px-2'>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `text-xs md:text-bold transition-all duration-300 ${isActive ? 'text-red-600' : 'text-gray-400 hover:text-red-600'}`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/bio"
                                className={({ isActive }) =>
                                    `text-xs md:text-bold transition-all duration-300 ${isActive ? 'text-red-600' : 'text-gray-400 hover:text-red-600'}`
                                }
                            >
                                Bio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/projects"
                                className={({ isActive }) =>
                                    `text-xs md:text-bold transition-all duration-300 ${isActive ? 'text-red-600' : 'text-gray-400 hover:text-red-600'}`
                                }
                            >
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/skills"
                                className={({ isActive }) =>
                                    `text-xs md:text-bold transition-all duration-300 ${isActive ? 'text-red-600' : 'text-gray-400 hover:text-red-600'}`
                                }
                            >
                                Skills
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `text-xs md:text-bold transition-all duration-300 ${isActive ? 'text-red-600' : 'text-gray-400 hover:text-red-600'}`
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="text-lg md:text-xl text-red-600 hover:text-amber-50 transition-all duration-300 font-bold font-[Font-1] order-first md:order-0">Sahil Tippe</div>
                <div className="hidden sm:flex md:flex-1 justify-end">
                    <SocialIcons />
                </div>
            </nav>
        </div>
    )
}

export default Navbar
