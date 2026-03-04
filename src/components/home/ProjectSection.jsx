import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';

// Import local images
import project1 from '../../assets/images/projects/sitecheck_new.png';
import project2 from '../../assets/images/projects/taskmanager_new.png';
import project3 from '../../assets/images/projects/chessgame.png';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        id: 1,
        title: "SiteCheck",
        subtitle: "Visit Site",
        image: project1,
        icon: "fa-brands fa-github"
    },
    {
        id: 2,
        title: "AI TASK MANAGER",
        subtitle: "Visit Site",
        image: project2,
        icon: "fa-brands fa-github"
    },
    {
        id: 3,
        title: "Chess game",
        subtitle: "Visit Site",
        image: project3,
        icon: "fa-brands fa-github"
    }
];

const ProjectCard = ({ project }) => {
    const cardRef = useRef(null);

    return (
        <div
            ref={cardRef}
            className="project-card group relative w-full aspect-[4/5] overflow-hidden rounded-2xl border border-white/5 bg-transparent cursor-pointer"
        >
            {/* Background Image */}
            <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-[100%] h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
            />

            {/* Cinematic Overlays */}
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent pointer-events-none"></div>
            <div className="absolute inset-0 bg-linear-to-b from-red-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Platform Icon */}
            <div className="absolute top-6 right-6 w-10 h-10 bg-black/40 backdrop-blur-md rounded-lg flex items-center justify-center border border-white/10 group-hover:border-red-600/50 transition-colors duration-300">
                <i className={`${project.icon} text-white/50 group-hover:text-red-500 text-lg`}></i>
            </div>

            {/* Content Labels */}
            <div className="absolute bottom-8 md:bottom-10 left-0 w-full text-center px-4 md:px-6">
                <p className="text-white/40 text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] mb-1 font-medium">{project.subtitle}</p>
                <h3 className="text-white text-xl md:text-3xl font-bold tracking-wider md:tracking-widest">{project.title}</h3>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute -inset-1 bg-red-600/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl -z-10"></div>
        </div>
    );
};

const ProjectSection = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const gridRef = useRef(null);

    const navigate = useNavigate();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Staggered entry for cards
            gsap.from(".project-card", {
                y: 60,
                opacity: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            });

            // Title Reveal
            gsap.from(titleRef.current, {
                letterSpacing: "0.2em",
                opacity: 0,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 90%",
                }
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className="w-full max-w-7xl mx-auto py-16 md:py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden">
            {/* Section Header */}
            <div className="mb-12 md:mb-16 relative">
                <h2
                    ref={titleRef}
                    className="text-[12vw] md:text-[6vw] font-[Font-1] font-black text-red-600/90 leading-none tracking-tighter"
                >
                    PROJECTS
                </h2>
                {/* Background Glow */}
                <div className="absolute -top-1/2 -left-1/4 w-[60%] h-[200%] bg-red-600/10 blur-[80px] md:blur-[120px] -z-10 rounded-full"></div>
            </div>

            {/* Projects Grid */}
            <div
                ref={gridRef}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
                onClick={() => navigate('/projects')}
            >
                {projects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>

            {/* Footer Action */}
            <div className="mt-10 md:mt-12 text-center md:text-right">
                <a
                    href="#"
                    className="inline-block text-red-600/60 hover:text-red-500 text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.4em] font-bold border-b border-red-900/40 hover:border-red-600 transition-all duration-300 pb-1"
                >
                    View All Projects
                </a>
            </div>
        </div>
    );
};

export default ProjectSection;