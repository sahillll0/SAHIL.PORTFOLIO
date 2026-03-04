import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import contactBg from '../assets/images/bio/contact_bg.png'

const Contact = () => {
    const mainRef = useRef(null)
    const titleRef = useRef(null)
    const formRef = useRef(null)

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(titleRef.current, {
                y: 50,
                opacity: 0,
                filter: "blur(10px)",
                duration: 1,
                delay: 0.3
            });

            gsap.from(formRef.current, {
                y: 30,
                opacity: 0,
                duration: 1,
                delay: 0.5
            });
        }, mainRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={mainRef} className="bg-black text-white min-h-screen pt-24 md:pt-32 pb-20 font-[Font-4]">
            <div className="max-w-7xl mx-auto px-[5vw]">
                {/* Hero Header */}
                <div className='flex justify-start items-center mb-10 md:mb-0'>
                    <h1 ref={titleRef} className='text-3xl md:text-4xl font-[Font-1]'>CONTACT</h1>
                    <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-red-600/10 blur-[150px] rounded-full z-0"></div>
                </div>

                {/* Split Layout */}
                <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
                    {/* Left: Cinematic Image */}
                    <div className="relative group overflow-hidden rounded-3xl md:rounded-4xl border border-white/10 shadow-2xl aspect-4/5 lg:aspect-auto lg:h-[600px]">
                        <img
                            src={contactBg}
                            alt="Contact Hero"
                            className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60"></div>

                        <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 space-y-1 md:space-y-2">
                            <span className="text-red-600 font-[Font-1] text-[10px] md:text-sm tracking-widest uppercase block">Currently Located</span>
                            <h3 className="text-xl md:text-2xl font-[Font-1] uppercase">Mumbai, India</h3>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div ref={formRef} className="space-y-8 md:space-y-12">
                        <div className="space-y-3 md:space-y-4 text-center md:text-left">
                            <h2 className="text-3xl md:text-4xl font-[Font-2] uppercase tracking-tight">Drop a Message</h2>
                            <p className="text-white/40 text-base md:text-lg">Have a project in mind or just want to say hi? Feel free to reach out.</p>
                        </div>

                        <form
                            action="https://formspree.io/f/xpqjvlrk"
                            method="POST"
                            className="space-y-8"
                        >
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2 group">
                                    <label className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-[Font-3]">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="John Doe"
                                        className="w-full bg-transparent border-b border-white/30 py-3 focus:outline-none focus:border-red-600 transition-colors placeholder:text-white/30"
                                    />
                                </div>
                                <div className="space-y-2 group">
                                    <label className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-[Font-3]">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="john@example.com"
                                        className="w-full bg-transparent border-b border-white/30 py-3 focus:outline-none focus:border-red-600 transition-colors placeholder:text-white/30"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2 group">
                                <label className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-[Font-3]">Topic</label>
                                <input
                                    type="text"
                                    name="topic"
                                    placeholder="Project Inquiry, General, etc."
                                    className="w-full bg-transparent border-b border-white/30 py-3 focus:outline-none focus:border-red-600 transition-colors placeholder:text-white/30"
                                />
                            </div>

                            <div className="space-y-2 group">
                                <label className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-[Font-3]">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="4"
                                    placeholder="Tell me about your vision..."
                                    className="w-full bg-transparent border-b border-white/30 py-3 focus:outline-none focus:border-red-600 transition-colors placeholder:text-white/30 resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-5 bg-red-600 text-white font-bold font-[Font-2] uppercase tracking-[0.2em] rounded-xl hover:bg-white hover:text-black transition-all duration-500 shadow-[0_0_30px_rgba(217,0,0,0.3)] hover:shadow-white/20"
                            >
                                Submit Request
                            </button>
                        </form>

                        <div className="pt-8 border-t border-white/5 flex flex-wrap gap-8">
                            <div>
                                <h4 className="text-[10px] text-white/40 uppercase tracking-[0.2em] mb-2">Email Directly</h4>
                                <a href="mailto:sahiltippe111@gmail.com" className="text-xl font-[Font-3] hover:text-red-600 transition-colors">sahiltippe111@gmail.com</a>
                            </div>
                            <div>
                                <h4 className="text-[10px] text-white/40 uppercase tracking-[0.2em] mb-2">Social Hub</h4>
                                <div className="flex gap-4">
                                    <a href="https://www.linkedin.com/in/sahil-tippe-b20766284/" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors uppercase font-[Font-3] text-xs">LinkedIn</a>
                                    <a href="https://x.com/sahil_tippe" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors uppercase font-[Font-3] text-xs">Twitter</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
