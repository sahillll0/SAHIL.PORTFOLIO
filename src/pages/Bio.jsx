import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import carousel images
import bio1 from '../assets/images/bio/bio1.jpg';
import bio2 from '../assets/images/bio/bio2.jpg';
import bio3 from '../assets/images/bio/bio3.jpg';
import coding1 from '../assets/images/bio/coding1.png';
import coding2 from '../assets/images/bio/coding2.png';
import resumeFile from '../assets/resume/Sahil Cv .pdf';

gsap.registerPlugin(ScrollTrigger);

const Bio = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [bio1, coding1, bio2, coding2, bio3];
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const detailRef = useRef(null);

    // Auto-looping carousel
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [images.length]);

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

            // Reveal Detail Section on Scroll
            gsap.from(detailRef.current, {
                opacity: 0,
                y: 100,
                duration: 1.5,
                scrollTrigger: {
                    trigger: detailRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={heroRef} className="bg-black text-white min-h-screen">
            {/* Section 1: Hero */}
            <div className='flex justify-center items-center h-[85vh] md:h-screen relative overflow-hidden'>
                <div className="absolute inset-0 z-0 ">
                    <div className="absolute inset-0 bg-linear-to-b from-black via-red-900/10 to-black"></div>
                    <img
                        src={bio2}
                        alt="Sahil Tippe"
                        className="w-full h-full object-cover mt-20 opacity-30 grayscale"
                    />
                </div>

                <div className='flex justify-center items-center h-screen'>
                    <h1 ref={titleRef} className='text-3xl md:text-4xl font-[Font-1]'>BIOGRAPHY</h1>
                    <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-red-600/10 blur-[150px] rounded-full z-0"></div>
                </div>

            </div>

            {/* Section 2: Details */}
            <section ref={detailRef} className="max-w-7xl mx-auto px-6 md:px-[5vw] py-16 md:py-32 flex flex-col md:flex-row gap-12 md:gap-20 items-center">
                {/* Left: Image Carousel */}
                <div className="w-full md:w-1/2 aspect-4/5 sm:aspect-square md:aspect-4/5 relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                }`}
                        >
                            <img
                                src={img}
                                alt={`Bio ${index + 1}`}
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            {/* Cinematic Overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60"></div>
                        </div>
                    ))}

                    {/* Badge */}
                    <div className="absolute top-0 left-6 z-10 w-8 h-12 md:w-10 md:h-14 bg-white flex items-center justify-center rounded-b-xl">
                        <div className="w-3 h-3 md:w-4 md:h-4 bg-red-600 rounded-full"></div>
                    </div>
                </div>

                {/* Right: Bio Text */}
                <div className="w-full md:w-1/2 flex flex-col gap-8 md:gap-10">
                    <div className="space-y-6 md:space-y-8 text-white/80 text-base md:text-lg leading-relaxed font-[Font-4] text-left md:text-justify tracking-tight">
                        <p>
                            <span className="text-red-600 font-bold uppercase tracking-wider">Sahil Tippe</span> is a MERN stack developer based in Mumbai, India, focused on building modern, responsive, and interactive web applications. With a strong foundation in JavaScript and full-stack development, he works across the entire development process — from designing user interfaces to building scalable backend services.
                        </p>

                        <p>
                            His work combines clean UI development with efficient backend logic, allowing him to create web applications that are both visually engaging and technically reliable. Sahil specializes in technologies such as React.js,NextJs, Node.js, Express.js, and MongoDB, while also integrating modern animation libraries like GSAP and Framer Motion to enhance user experience.
                        </p>

                        <p>
                            Driven by curiosity and continuous learning, he actively explores new tools and technologies that improve development workflows and performance. Sahil frequently uses AI-assisted tools such as ChatGPT, GitHub Copilot, and other modern developer utilities to streamline coding, problem solving, and productivity.
                        </p>

                        <p>
                            His development approach focuses on writing maintainable code, building responsive interfaces, and implementing efficient REST APIs. Alongside frontend and backend development, he is also interested in understanding deeper aspects of web systems such as server load handling, concurrency management, and scalable application architecture.
                        </p>

                        <p>
                            Currently completing his Bachelor of Computer Applications at <span className="text-red-600/70">Tilak Maharashtra Vidyapeeth</span>, Sahil continues to strengthen his skills through practical development and consistent daily learning. His work reflects a balance between creativity and technical precision, combining modern web technologies with thoughtful design and functionality.
                        </p>

                        <p>
                            As a developer at the beginning of his professional journey, Sahil is focused on gaining real-world experience, contributing to meaningful projects, and continuously improving his problem-solving abilities. His goal is to build impactful digital products while growing into a well-rounded full-stack engineer.
                        </p>

                        <p className="border-l-2 border-red-600 pl-4 py-2 text-white/40 italic text-sm md:text-base bg-white/5 rounded-r-xl">
                            Based in Mumbai, he is open to collaboration, learning opportunities, and roles where he can apply his skills in modern web development while continuing to evolve with the fast-moving world of technology.
                        </p>
                    </div>
                    <div className="pt-8 flex flex-col sm:flex-row items-center gap-6">
                        <a
                            href={resumeFile}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-full overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-3"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <i className="fa-solid fa-eye text-sm"></i>
                                Preview Resume
                            </span>
                            <div className="absolute inset-0 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                            <span className="absolute inset-0 z-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white">
                                <i className="fa-solid fa-eye text-sm"></i>
                                Preview Resume
                            </span>
                        </a>

                        <a
                            href={resumeFile}
                            download="Sahil_Tippe_Resume.pdf"
                            className="group relative px-8 py-4 border border-red-600/50 text-red-600 font-bold uppercase tracking-widest text-xs rounded-full overflow-hidden transition-all duration-300 hover:border-red-600 hover:text-white flex items-center gap-3"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <i className="fa-solid fa-download text-sm"></i>
                                Download CV
                            </span>
                            <div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute -inset-2 bg-red-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Bio;
