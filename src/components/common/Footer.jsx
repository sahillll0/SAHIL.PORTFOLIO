import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { id: 1, icon: "fa-brands fa-github", url: "https://github.com/sahillll0", label: "GitHub" },
        { id: 2, icon: "fa-brands fa-linkedin-in", url: "https://www.linkedin.com/in/sahil-tippe-b20766284/", label: "LinkedIn" },
        { id: 3, icon: "fa-brands fa-instagram", url: "https://www.instagram.com/sahillllll_00/", label: "Instagram" },
        { id: 4, icon: "fa-brands fa-x-twitter", url: "https://x.com/sahil_tippe", label: "X (Twitter)" },
    ];

    const navLinks = [
        { name: "HOME", path: "/" },
        { name: "BIO", path: "/bio" },
        { name: "PROJECTS", path: "/projects" },
        { name: "SKILLS", path: "/skills" }, // Linking to skills section on home
        { name: "CONTACT", path: "/contact" },
    ];

    const headingRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(headingRef.current, {
                y: 100,
                opacity: 0,
                filter: "blur(20px)",
                duration: 2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: "top 90%",
                    toggleActions: "play none none reverse",
                }
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <footer className="relative w-full py-10 px-[5vw] overflow-hidden bg-black/50 backdrop-blur-md ">
            {/* Top Shine Accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[1px] bg-linear-to-r from-transparent via-red-600/30 to-transparent"></div>

            <div className="max-w-10xl mx-auto flex flex-col items-start">
                {/* Large Stylized Heading */}
                <h2
                    ref={headingRef}
                    className="text-4xl sm:text-5xl md:text-[5vw] font-black text-red-600 leading-none tracking-tighter mb-4 font-[Font-1] uppercase w-full"
                >
                    STAY CONNECTED
                </h2>

                <p className="text-white/40 text-[10px] md:text-sm max-w-2xl mb-6 uppercase tracking-widest font-medium">
                    Open for collaborations, freelance opportunities, and technical discussions.
                    Based in India — Available worldwide.
                </p>

                {/* Navigation Links */}
                <nav className="flex flex-wrap gap-4 md:gap-8 mb-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="text-white/60 hover:text-red-500 text-xs md:text-sm font-bold tracking-[0.2em] transition-colors duration-300"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Social Icons */}
                <div className="flex gap-4 mb-10">
                    {socialLinks.map((social) => (
                        <a
                            key={social.id}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-red-600 hover:border-red-600/50 transition-all duration-300 group shadow-lg"
                            aria-label={social.label}
                        >
                            <i className={`${social.icon} text-lg group-hover:scale-110 transition-transform`}></i>
                        </a>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="w-full pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/70 text-[10px] md:text-xs tracking-widest uppercase font-medium">
                        © {currentYear} SAHIL TIPPE — ALL RIGHTS RESERVED
                    </p>
                    <div className="flex items-center gap-6">
                        <p className="text-white/40 text-[10px] md:text-xs tracking-widest uppercase font-medium">
                            WEBSITE BY <span className="text-red-600/70 hover:text-red-600 transition-colors cursor-pointer tracking-tighter">SAHIL</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-red-600/5 blur-[120px] rounded-full pointer-events-none"></div>
        </footer>
    );
};

export default Footer;
