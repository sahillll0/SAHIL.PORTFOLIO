import React, { useEffect, useState } from 'react';

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const mouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', mouseMove);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
        };
    }, []);

    return (
        <div
            className="custom-cursor"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                position: 'fixed',
                pointerEvents: 'none',
                zIndex: 9999,
                width: '12px',
                height: '12px',
                backgroundColor: 'rgb(217, 0, 0)',
                border: '1px solid black',
                borderRadius: '50%',
                transform: 'translate(-50%, -50%)' // Center the circle on the pointer
            }}
        />
    );
};

export default Cursor;
