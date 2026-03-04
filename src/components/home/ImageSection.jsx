import React, { useLayoutEffect, useRef } from 'react';
import sahilAbout from '../../assets/images/image.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ImageSection = () => {
    const containerRef = useRef(null);
    const imageRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Scale animation: Small to Big on scroll
            gsap.fromTo(imageRef.current,
                { scale: 0.8, opacity: 0.8 },
                {
                    scale: 1,
                    opacity: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top bottom", // when the top of the trigger hits the bottom of the viewport
                        end: "center center", // when the center of the trigger hits the center of the viewport
                        scrub: 1, // smooth scrubbing
                    }
                }
            );

            // Subtle parallax for the background overlay elements if any
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="w-full max-w-10xl mx-auto py-24 px-6 sm:px-12 lg:px-20">
            <div
                ref={containerRef}
                className='relative w-full h-[60vh] md:h-[90vh] overflow-hidden rounded-3xl md:rounded-[2.5rem] border border-white/5 group bg-transparent shadow-none'
            >

                <img
                    ref={imageRef}
                    src={sahilAbout}
                    alt="sahil"
                    className='w-[85%] md:w-[60%] h-[80%] md:h-[90%] m-auto object-cover transition-transform duration-700 pointer-events-none'
                />

                {/* Decorative element - Refined */}
                <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 z-10">
                    <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-3">
                        <div className="w-10 md:w-16 h-[1.5px] md:h-[2px] bg-red-600"></div>
                        <span className="text-red-500/80 text-[8px] md:text-[10px] tracking-[0.3em] md:tracking-[0.5em] font-bold uppercase">01</span>
                    </div>
                    <h3 className="text-white text-2xl md:text-5xl font-['Font-4'] mb-1 md:mb-2 opacity-90">THE VISION</h3>
                    <p className="text-white/40 font-['Font-4'] text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.4em]">Crafting Digital Excellence</p>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-8 right-8 w-12 h-12 border-t border-r border-white/20 rounded-tr-xl"></div>
                <div className="absolute bottom-8 right-8 w-12 h-12 border-b border-r border-white/20 rounded-br-xl"></div>
            </div>
        </div>
    )
}

export default ImageSection