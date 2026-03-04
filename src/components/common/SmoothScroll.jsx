import React, { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

const SmoothScroll = ({ children }) => {
    useEffect(() => {
        // Locomotive Scroll v5+ (built on Lenis)
        const scroll = new LocomotiveScroll();

        return () => {
            // @ts-ignore
            if (scroll && typeof scroll.destroy === 'function') {
                scroll.destroy();
            }
        };
    }, []);

    return (
        <>
            {children}
        </>
    );
};

export default SmoothScroll;
