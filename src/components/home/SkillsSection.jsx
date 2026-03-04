import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import local images
import mongodbBg from '../../assets/images/skills/mongodb_bg.png';
import expressBg from '../../assets/images/skills/express_bg.png';
import reactBg from '../../assets/images/skills/react_bg.png';
import tailwindBg from '../../assets/images/skills/tailwind_bg.png';
import genaiBg from '../../assets/images/skills/genai_bg.png';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const skills = [
    {
        id: 1,
        name: "MongoDB",
        icon: "fa-solid fa-leaf",
        description: "NoSQL Database",
        color: "text-green-500",
        image: mongodbBg
    },
    {
        id: 2,
        name: "Express js",
        icon: "fa-solid fa-server",
        description: "Web Framework",
        color: "text-gray-400",
        image: expressBg
    },
    {
        id: 3,
        name: "React js",
        icon: "fa-brands fa-react",
        description: "Frontend Library",
        color: "text-cyan-400",
        image: reactBg
    },
    {
        id: 4,
        name: "Node js",
        icon: "fa-brands fa-node-js",
        description: "Runtime Environment",
        color: "text-green-600",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 5,
        name: "Tailwind CSS",
        icon: "fa-solid fa-wind",
        description: "Styling Engine",
        color: "text-sky-400",
        image: tailwindBg
    },
    {
        id: 6,
        name: "Generative AI",
        icon: "fa-solid fa-brain",
        description: "AI Model Integration",
        color: "text-red-500",
        image: genaiBg
    }
];

const SkillsSection = () => {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const totalWidth = sectionRef.current.scrollWidth;
            const viewportWidth = window.innerWidth;

            gsap.to(sectionRef.current, {
                x: () => -(totalWidth - viewportWidth),
                ease: "none",
                scrollTrigger: {
                    trigger: triggerRef.current,
                    pin: true,
                    scrub: 1,
                    start: "top top",
                    end: () => `+=${totalWidth}`,
                    invalidateOnRefresh: true,
                }
            });
        }, triggerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="overflow-hidden">
            <div ref={triggerRef}>
                <div ref={sectionRef} className="relative flex h-screen items-center px-[10vw] gap-20 bg-transparent">
                    {/* Cinematic Background Title */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap opacity-[0.03] pointer-events-none select-none">
                        <h2 className="text-[35vw] font-black text-red-600 tracking-tighter leading-none">
                            SKILLS
                        </h2>
                    </div>

                    {/* Section Header */}
                    <div className="shrink-0 w-[50vw] md:w-[40vw] max-w-md">
                        <h2 className="text-[10vw] md:text-[5vw] font-[Font-1] font-black text-white leading-none mb-4 md:mb-6">
                            MY <span className="text-red-600">STACK</span>
                        </h2>
                        <p className="text-white/40 text-[10px] md:text-base uppercase tracking-widest font-medium">
                            Expertise in modern web technologies.
                        </p>
                    </div>

                    {skills.map((skill) => (
                        <div
                            key={skill.id}
                            className="shrink-0 w-[80vw] sm:w-[50vw] md:w-[28vw] aspect-[4/5] rounded-3xl md:rounded-4xl border border-white/5 flex flex-col justify-between hover:border-red-600/30 transition-all duration-700 group relative overflow-hidden bg-black shadow-2xl"
                        >
                            {/* Background Image */}
                            <img
                                src={skill.image}
                                alt={skill.name}
                                className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0"
                            />

                            {/* Cinematic Overlays */}
                            <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent pointer-events-none"></div>
                            <div className="absolute inset-0 bg-linear-to-b from-red-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Abstract Glow */}
                            <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-red-600/10 blur-[60px] rounded-full group-hover:bg-red-600/20 transition-all duration-700"></div>

                            <div className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-between">
                                <div>
                                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center mb-4 md:mb-6 group-hover:border-red-600/50 transition-colors duration-500">
                                        <i className={`${skill.icon} text-2xl md:text-3xl ${skill.color} drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]`}></i>
                                    </div>
                                    <h3 className="text-2xl md:text-4xl font-bold text-white mb-1 md:mb-2 leading-none uppercase tracking-tighter">{skill.name}</h3>
                                    <p className="text-white/40 text-[9px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] font-medium">{skill.description}</p>
                                </div>

                                <div className="text-right opacity-10 group-hover:opacity-100 transition-opacity duration-500">
                                    <span className="text-white font-[Font-2] text-5xl md:text-8xl font-black italic select-none">0{skill.id}</span>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Ending Section Spacer */}
                    <div className="shrink-0 w-[20vw]"></div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;