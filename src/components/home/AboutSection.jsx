import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import sahilAbout from '../../assets/images/sahil_about.png';
import { Link } from 'react-router-dom';


gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Content Animation
            gsap.fromTo(contentRef.current,
                { opacity: 0, x: -100 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1.5,
                    ease: 'power4.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 60%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Image Animation
            gsap.fromTo(imageRef.current,
                { opacity: 0, scale: 0.9, x: 50 },
                {
                    opacity: 1,
                    scale: 1,
                    x: 0,
                    duration: 1.5,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 60%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Image Animation
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="about"
            ref={sectionRef}
            className=" relative min-h-screen overflow-hidden flex items-center justify-center py-20 px-6 lg:px-20 bg-transparent"
        >

            <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-16 lg:gap-32">

                {/* Left Side: Content */}
                <div ref={contentRef} className="flex-1 space-y-8 text-center md:text-left">
                    <h2 className="text-[2.5rem] md:text-[4rem] lg:text-[6rem] leading-[0.8]  font-['Font-1'] text-[#ff3c00] uppercase tracking-tighter select-none">
                        ABOUT
                    </h2>
                    <div className="max-w-xl mx-auto md:mx-0 space-y-6">
                        <p className="text-lg md:text-xl text-gray-300 font-['Font-4'] leading-relaxed">
                            Sahil Tippe, a dynamic Full Stack Developer and Designer, crafts immersive digital experiences that blend cinematic aesthetics with high-performance code.
                        </p>

                        <p className="text-gray-400 font-['Font-4'] leading-relaxed">
                            His work focuses on creating seamless interactions and visually stunning interfaces that captivate users and drive engagement. Based on the MERN stack, He pushes the boundaries of modern web development.
                        </p>

                        <div className="pt-6">
                            <Link
                                to="/bio"
                                className="group inline-flex items-center gap-2 text-[#ff3c00] font-bold uppercase tracking-widest text-sm border-b border-[#ff3c00] pb-1 hover:text-white hover:border-white transition-[color,border-color] duration-300"
                            >
                                Find Out More
                                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Right Side: Image Container */}
                <div ref={imageRef} className="flex-1 flex justify-center items-center">
                    <div className="relative group w-full flex justify-center">
                        {/* Glow Effect */}
                        <div className="absolute -inset-1 bg-linear-to-r from-red-600 to-transparent blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

                        {/* Image Frame */}
                        <div className="relative w-full max-w-[320px] aspect-320/450 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                            <img
                                src={sahilAbout}
                                alt="Sahil Tippe"
                                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                                style={{ willChange: 'transform' }}
                            />

                            {/* Red Gradient Overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>

                            {/* Reference site detail: Small white box */}
                            <div className="absolute top-0 left-6 w-8 h-8 bg-white flex items-center justify-center rounded-b-xl z-20">
                                <div className="w-4 h-4 rounded-full bg-black"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
