import React from 'react';
import siteCheckLogo from '../../assets/images/projects/sitecheck_new.png';
import { useNavigate } from 'react-router-dom';

const LatestUpdates = ({ updatesRef }) => {
    const navigate = useNavigate();
    const updates = [
        { id: 1, text: "Website Performance & Speed Analysis", icon: "fa-tachometer-alt" },
        { id: 2, text: "SEO Optimization & Ranking Insights", icon: "fa-chart-line" },
        { id: 3, text: "Security Vulnerability Scanning", icon: "fa-shield-alt" },
        { id: 4, text: "Real-time Uptime Monitoring", icon: "fa-server" }
    ];

    return (
        <div
            ref={updatesRef}
            className='max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-12 items-center justify-center opacity-0 bg-transparent'
        >
            <div className='relative group w-full flex justify-center'>
                <div className='absolute -inset-1 bg-linear-to-r from-red-600 to-transparent blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200'></div>
                <div className='relative w-full max-w-[320px] aspect-320/450 rounded-xl overflow-hidden border border-white/10 shadow-2xl'>
                    <img
                        src={siteCheckLogo}
                        alt="SiteCheck Logo"
                        className='w-full h-full object-cover transition duration-500 group-hover:scale-110'
                    />
                </div>
            </div>

            {/* Right: Updates List */}
            <div className='flex-1 w-full max-w-xl'>
                <h2 className='text-4xl md:text-5xl font-bold font-[Font-1] text-red-600 mb-8 tracking-wider uppercase italic'>
                    Latest Updates
                </h2>

                <div className='space-y-4'>
                    {updates.map((update) => (
                        <div
                            key={update.id}
                            className='flex items-center gap-4 p-4 rounded-xl bg-transparent border border-white/5 hover:border-red-600/30 transition-all duration-300 cursor-pointer group'
                        >
                            <div className='w-10 h-10 rounded-full bg-red-600/10 border border-red-600/30 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-black transition-all'>
                                <i className={`fas ${update.icon} text-sm`}></i>
                            </div>
                            <p className='text-gray-300 font-medium group-hover:text-white transition-colors'>
                                {update.text}
                            </p>
                        </div>
                    ))}
                </div>

                <div className='mt-10' onClick={() => navigate('/projects')}>
                    <a
                        href="#"
                        className='inline-block text-red-600 font-bold border-b-2 border-red-600 pb-1 hover:text-white hover:border-white transition-all text-lg tracking-widest uppercase'
                    >
                        View Projects
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LatestUpdates;
