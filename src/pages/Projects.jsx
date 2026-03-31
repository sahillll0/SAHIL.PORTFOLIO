import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import project1 from '../assets/images/bio/project1.jpeg'

// Import Project Images
import sitecheckImg from '../assets/images/projects/sitecheck_new.png'
import sendlyImg from '../assets/images/projects/sendly.png'
import taskImg from '../assets/images/projects/taskmanager_new.png'

gsap.registerPlugin(ScrollTrigger)

const projects = [
    {
        title: "Sendly",
        description: "A powerful form backend for developers. The easiest way to receive form submissions from your static site. Connect your frontend to the API and get emails instantly without a server.",
        tech: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
        github: "https://github.com/sahillll0/sendly",
        live: "https://sendly-bay.vercel.app/",
        image: sendlyImg
    },
    {
        title: "SiteCheck",
        description: "A comprehensive website analyzer providing deep insights into technical SEO, performance metrics, and accessibility standards. Built with a focus on speed and actionable data .",
        tech: ["React.js", "Node.js", "Express.js", "Tailwind CSS"],
        github: "https://github.com/sahillll0/SiteCheck.com",
        live: "https://site-check-com.vercel.app/",
        image: sitecheckImg
    },
    {
        title: "Ai Task Manager",
        description: "A high-performance productivity dashboard that helps developers and teams organize complex workflows with real-time updates and intuitive drag-and-drop interfaces.",
        tech: ["MERN Stack", "Framer Motion", "JWT", "Redux"],
        github: "https://github.com/sahillll0/Ai-Task-Manager",
        live: "https://ai-task-manager-delta.vercel.app/",
        image: taskImg

    }

];

const Projects = () => {
    const heroRef = useRef(null)
    const titleRef = useRef(null)
    const projectRefs = useRef([])

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Hero Title Entrance
            gsap.from(titleRef.current, {
                y: 100,
                delay: 1,
                opacity: 0,
                filter: "blur(20px)",
                duration: 1.5,
                ease: "power4.out"
            });

            // Reveal Projects on Scroll
            projectRefs.current.forEach((el) => {
                if (el) {
                    gsap.from(el, {
                        opacity: 0,
                        y: 100,
                        duration: 1.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    });
                }
            });
        }, heroRef)

        return () => ctx.revert()
    }, [])

    return (
        <div ref={heroRef} className="bg-black text-white min-h-screen font-[Font-4]">
            {/* Section 1: Hero */}
            <div className='flex justify-center items-center h-[90vh] relative overflow-hidden'>
                <div className="absolute inset-0 z-0 ">
                    <div className="absolute inset-0 bg-linear-to-b from-black via-red-900/10 to-black z-10"></div>
                    <img
                        src={project1}
                        alt="Projects Hero"
                        className="w-full h-full object-cover mt-20 opacity-30 grayscale"
                    />
                </div>

                <div className='flex justify-center items-center h-screen'>
                    <h1 ref={titleRef} className='text-3xl md:text-4xl font-[Font-1]'>PROJECTS</h1>
                    <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-red-600/10 blur-[150px] rounded-full z-0"></div>
                </div>
            </div>

            {/* Section 2: Project Showcase */}
            <section className="max-w-7xl mx-auto px-[5vw] py-20 md:py-32 flex flex-col gap-24 md:gap-40">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        ref={el => projectRefs.current[index] = el}
                        className="flex flex-col md:flex-row items-center gap-8 md:gap-12 group"
                    >
                        {/* Left: Project Info */}
                        <div className="w-full md:w-5/12 space-y-6 md:space-y-8 order-2 md:order-1">
                            <div className="space-y-4">
                                <span className="text-red-600 font-[Font-1] text-base md:text-lg tracking-[0.2em] uppercase">0{index + 1} / Project</span>
                                <h2 className="text-3xl md:text-6xl font-[Font-1] font-bold text-white group-hover:text-red-600 transition-colors duration-500">
                                    {project.title}
                                </h2>
                                <p className="text-white/60 text-sm md:text-base leading-relaxed text-justify">
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-semibold tracking-wider uppercase text-white/50">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-6 pt-4">
                                <a
                                    href={project.live}
                                    target='_blank'
                                    className="px-8 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 group/btn shadow-[0_0_20px_rgba(217,0,0,0.3)] hover:shadow-white/20"
                                >
                                    Live Demo <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                                </a>
                                <a
                                    href={project.github}
                                    target='_blank'
                                    className="p-3 bg-white/5 rounded-lg border border-white/10 hover:border-red-600 hover:bg-red-600 transition-all duration-300 group/git"
                                >
                                    <i className="fa-brands fa-github text-2xl text-white group-hover/git:scale-110 transition-transform"></i>
                                </a>
                            </div>
                        </div>

                        {/* Right: Project Image */}
                        <div className="w-full md:w-7/12 order-1 md:order-2">
                            <div className="relative group/img overflow-hidden rounded-2xl border border-white/10 shadow-2xl aspect-video">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover grayscale group-hover/img:grayscale-0 group-hover/img:scale-105 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-red-600/5 group-hover/img:bg-transparent transition-colors duration-700"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            {/* View More Projects Section */}
            <div className="py-24 flex flex-col items-center justify-center gap-8 relative overflow-hidden group/vm">
                <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover/vm:opacity-100 transition-opacity duration-700 blur-3xl rounded-full scale-150"></div>

                <h3 className="text-white/40 font-[Font-1] text-lg md:text-xl uppercase tracking-[0.5em] mb-4">
                    View More Projects
                </h3>

                <a
                    href="https://github.com/sahillll0 "
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 px-10 py-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white hover:text-black transition-all duration-500 group/btn shadow-2xl relative z-10"
                >
                    <i className="fa-brands fa-github text-3xl"></i>
                    <span className="text-xl font-bold font-[Font-1] uppercase tracking-wider">Explore GitHub</span>
                    <span className="text-2xl group-hover/btn:translate-x-2 transition-transform duration-300">→</span>
                </a>

                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-48 h-1 bg-red-600/50 blur-sm rounded-full scale-x-0 group-hover/vm:scale-x-100 transition-transform duration-1000"></div>
            </div>

            {/* Final CTA/Footer section placeholder */}
            <div className="py-20 text-center border-t border-white/5 mx-[5vw]">
                <p className="text-white/10 font-[Font-1] tracking-[1em] uppercase text-xs">
                    More coming soon
                </p>
            </div>
        </div>
    )
}

export default Projects
