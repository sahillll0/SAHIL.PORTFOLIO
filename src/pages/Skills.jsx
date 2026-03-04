import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Import Local Backgrounds
import reactBg from '../assets/images/skills/react_bg.png'
import expressBg from '../assets/images/skills/express_bg.png'
import tailwindBg from '../assets/images/skills/tailwind_bg.png'
import genaiBg from '../assets/images/skills/genai_bg.png'

gsap.registerPlugin(ScrollTrigger)

const skillCategories = [
  {
    name: "Frontend",
    description: "Architecting visual interfaces with precision and performance.",
    bgImage: reactBg,
    skills: [
      { name: "React.js", icon: "react", url: "https://react.dev/" },
      { name: "JavaScript", icon: "javascript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "Tailwind CSS", icon: "tailwindcss", url: "https://tailwindcss.com/" },
      { name: "HTML5", icon: "html5", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { name: "CSS3", icon: "css3", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
      { name: "Vite", icon: "vite", url: "https://vitejs.dev/" }
    ]
  },
  {
    name: "Backend",
    description: "Scaling logic and data persistence across distributed ecosystems.",
    bgImage: expressBg,
    skills: [
      { name: "Node.js", icon: "nodedotjs", url: "https://nodejs.org/" },
      { name: "Express.js", icon: "express", url: "https://expressjs.com/" },
      { name: "MongoDB", icon: "mongodb", url: "https://www.mongodb.com/" },
      { name: "JWT", icon: "jsonwebtokens", url: "https://jwt.io/" },
      { name: "REST APIs", icon: "express", url: "https://restfulapi.net/" }
    ]
  },
  {
    name: "Animation",
    description: "Breathing life into static pixels with advanced motion science.",
    bgImage: tailwindBg,
    skills: [
      { name: "GSAP", icon: "greensock", url: "https://gsap.com/" },
      { name: "Framer Motion", icon: "framer", url: "https://www.framer.com/motion/" },
      { name: "CSS Animations", icon: "css3", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations" }
    ]
  },
  {
    name: "Tools & AI",
    description: "Leveraging modern infrastructure and intelligent workflows.",
    bgImage: genaiBg,
    skills: [
      { name: "GitHub", icon: "github", url: "https://github.com/" },
      { name: "VS Code", icon: "visualstudiocode", url: "https://code.visualstudio.com/" },
      { name: "Postman", icon: "postman", url: "https://www.postman.com/" },
      { name: "Vercel", icon: "vercel", url: "https://vercel.com/" },
      { name: "ChatGPT", icon: "chatgpt", url: "https://chat.openai.com/" }
    ]
  }
];

const Skills = () => {
  const mainRef = useRef(null)
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const sectionRefs = useRef([])

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Hero Title Entrance
      gsap.from(titleRef.current, {
        y: 100,
        delay: 0.5,
        opacity: 0,
        filter: "blur(20px)",
        duration: 1.5,
        ease: "power4.out"
      });

      // Parallax Backgrounds and Title Reveals
      sectionRefs.current.forEach((section) => {
        const bg = section.querySelector('.section-bg');
        const content = section.querySelector('.section-content');

        if (bg) {
          gsap.to(bg, {
            yPercent: 30,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          });
        }

        if (content) {
          gsap.from(content, {
            opacity: 0,
            y: 100,
            duration: 1.2,
            scrollTrigger: {
              trigger: section,
              start: "top 70%",
              toggleActions: "play none none reverse"
            }
          });
        }
      });
    }, mainRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={mainRef} className="bg-black text-white min-h-screen font-[Font-4] overflow-x-hidden">
      {/* Page Hero */}
      <div ref={heroRef} className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/50 to-black z-10"></div>
          <img
            src={reactBg}
            className="w-full h-full object-cover grayscale opacity-20 scale-105"
            alt="Background"
          />
        </div>
        <div className='flex justify-center items-center h-screen'>
          <h1 ref={titleRef} className='text-3xl md:text-4xl font-[Font-1]'>Expertise</h1>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-red-600/10 blur-[150px] rounded-full z-0"></div>
        </div>
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-white/40 font-[Font-1] tracking-[0.5em] md:tracking-[1em] uppercase text-[10px] md:text-xs animate-bounce w-full text-center">
          Scroll to Explore
        </div>
      </div>

      {/* Categorized Chapters */}
      {skillCategories.map((category, index) => (
        <section
          key={index}
          ref={el => sectionRefs.current[index] = el}
          className="min-h-[70vh] md:min-h-screen relative py-20 md:py-32 flex items-center overflow-hidden border-t border-white/5"
        >
          {/* Parallax Background */}
          <div className="absolute inset-0 z-0 section-bg overflow-hidden opacity-30 grayscale saturate-0 pointer-events-none">
            <img
              src={category.bgImage}
              className="w-full h-[140%] object-cover"
              alt={category.name}
            />
            <div className="absolute inset-0 bg-linear-to-b from-black via-black/40 to-black"></div>
          </div>

          <div className="max-w-7xl mx-auto px-[5vw] relative z-10 w-full section-content">
            <div className="grid lg:grid-cols-12 gap-12 md:gap-16 items-start">
              {/* Category Info */}
              <div className="lg:col-span-5 space-y-4 md:space-y-6">
                <span className="text-red-600 font-[Font-1] text-base md:text-lg tracking-[0.3em] uppercase block">
                  Chapter 0{index + 1}
                </span>
                <h2 className="text-4xl md:text-8xl font-[Font-1] font-black text-white tracking-tighter leading-none uppercase">
                  {category.name}
                </h2>
                <p className="text-white/40 text-base md:text-xl font-light italic max-w-md">
                  {category.description}
                </p>
                <div className="h-1 w-16 md:w-20 bg-red-600 rounded-full"></div>
              </div>

              {/* Skill Grid */}
              <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill, i) => (
                  <a
                    key={i}
                    href={skill.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative h-40 flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-3xl hover:border-red-600 hover:bg-white transition-all duration-500 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>

                    <img
                      src={`https://cdn.simpleicons.org/${skill.icon}/ffffff`}
                      className="w-10 h-10 mb-4 group-hover:scale-110 group-hover:invert transition-all duration-500 grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0"
                      alt={skill.name}
                    />

                    <span className="text-sm font-bold font-[Font-1] uppercase tracking-widest text-white/50 group-hover:text-black transition-colors duration-500 text-center">
                      {skill.name}
                    </span>

                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-black text-xs">↗</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Bottom Section */}
      <div className="py-40 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-red-600/5 blur-3xl opacity-20"></div>
        <p className="text-white/40 font-[Font-1] tracking-[1.5em] uppercase text-sm relative z-10">
          Always Evolution
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-red-600/50 rounded-full animate-pulse delay-100"></div>
          <div className="w-2 h-2 bg-red-600/20 rounded-full animate-pulse delay-200"></div>
        </div>
      </div>
    </div>
  )
}

export default Skills