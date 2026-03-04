import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import LatestUpdates from '../components/home/LatestUpdates'
import AboutSection from '../components/home/AboutSection'
import ImageSection from '../components/home/ImageSection'
import ProjectSection from '../components/home/ProjectSection'
import SkillsSection from '../components/home/SkillsSection'


const Home = () => {
    const nameRef = useRef(null);
    const subRef = useRef(null);
    const availRef = useRef(null);
    const updatesRef = useRef(null);

    useEffect(() => {
        const chars = nameRef.current.querySelectorAll('.char');

        const tl = gsap.timeline();

        tl.fromTo(chars,
            { opacity: 0, filter: 'blur(10px)', y: 20 },
            { opacity: 1, filter: 'blur(0px)', y: 0, duration: 1.2, stagger: 0.05, ease: 'power3.out', delay: 0.5 }
        )
            .fromTo(subRef.current,
                { opacity: 0, filter: 'blur(8px)', y: 10 },
                { opacity: 1, filter: 'blur(0px)', y: 0, duration: 1.5, ease: 'power2.out' },
                "-=0.5"
            )
            .fromTo(availRef.current,
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' },
                "-=0.8"
            )
            .fromTo(updatesRef.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' },
                "-=0.8"
            );
    }, []);

    return (
        <>
            <div className='flex flex-col justify-between'>
                <div className='min-h-screen text-white relative overflow-x-hidden font-[Font-4]'>
                    {/* Hero Section */}
                    <div className=' text-center flex flex-col justify-center items-center pt-24 pb-12 min-h-[85vh] md:min-h-screen'>
                        <div className='text-center z-10 w-full px-6'>
                            <h1
                                ref={nameRef}
                                className='text-5xl sm:text-6xl md:text-7xl lg:text-[6vw] font-bold font-[Font-1] leading-none flex flex-wrap gap-[0.5vw] justify-center'
                            >
                                {"SAHIL TIPPE".split(" ").map((word, wordIndex) => (
                                    <div key={wordIndex} className="flex gap-[0.5vw]">
                                        {word.split("").map((char, charIndex) => (
                                            <span
                                                key={charIndex}
                                                className='char hover:text-gray-400 transition-colors duration-200 cursor-default inline-block'
                                                style={{ opacity: 0 }}
                                            >
                                                {char}
                                            </span>
                                        ))}
                                        {wordIndex === 0 && <span className="inline-block">&nbsp;</span>}
                                    </div>
                                ))}
                            </h1>
                            <p
                                ref={subRef}
                                className='text-[10px] sm:text-sm md:text-base lg:text-[1vw] font-bold text-red-600 mt-6 md:mt-2 tracking-[0.4em] md:tracking-[0.5vw] uppercase'
                                style={{ opacity: 0 }}
                            >
                                Full Stack Developer
                            </p>
                            <div
                                ref={availRef}
                                className="flex items-center justify-center gap-2 md:gap-3 mt-12 md:mt-8"
                                style={{ opacity: 0 }}
                            >
                                <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_12px_rgba(34,197,94,0.8)]"></span>
                                <span className="text-[9px] md:text-[0.8vw] text-white/40 font-[Font-1] tracking-[0.2em] md:tracking-[0.3em] uppercase">Available for Hire</span>
                            </div>
                        </div>
                    </div>
                </div>
                <LatestUpdates updatesRef={updatesRef} />
                <AboutSection />
                <ImageSection />
                <ProjectSection />
                <SkillsSection />
            </div>
        </>
    )
}

export default Home
