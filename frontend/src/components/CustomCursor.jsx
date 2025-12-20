import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const cursorDotRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // 1. Check if the device has a "fine" pointer (mouse)
        const mediaQuery = window.matchMedia('(pointer: coarse)');
        setIsMobile(mediaQuery.matches);

        // Exit early if it's a touch device
        if (mediaQuery.matches) return;

        const cursor = cursorRef.current;
        const cursorDot = cursorDotRef.current;

        const moveCursor = (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.5,
                ease: 'power2.out',
            });

            gsap.to(cursorDot, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
            });
        };

        window.addEventListener('mousemove', moveCursor);

        const addHoverEffect = () => gsap.to(cursor, { scale: 1.5, duration: 0.3 });
        const removeHoverEffect = () => gsap.to(cursor, { scale: 1, duration: 0.3 });

        const interactiveElements = document.querySelectorAll('a, button, input, textarea, select');
        interactiveElements.forEach((el) => {
            el.addEventListener('mouseenter', addHoverEffect);
            el.addEventListener('mouseleave', removeHoverEffect);
        });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            interactiveElements.forEach((el) => {
                el.removeEventListener('mouseenter', addHoverEffect);
                el.removeEventListener('mouseleave', removeHoverEffect);
            });
        };
    }, []);

    // 2. Return null if on mobile so nothing renders
    if (isMobile) return null;

    return (
        <>
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-10 h-10 border-2 border-primary rounded-full pointer-events-none z-9999 -translate-x-1/2 -translate-y-1/2 backdrop-blur-sm"
                style={{ mixBlendMode: 'difference' }}
            />
            <div
                ref={cursorDotRef}
                className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-9999 -translate-x-1/2 -translate-y-1/2"
            />
        </>
    );
};

export default CustomCursor;