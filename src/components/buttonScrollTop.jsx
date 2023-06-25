import React, { useState, useEffect } from 'react';

export default function ScrollToTopButton () {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) return setIsVisible(true);
        setIsVisible(false);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        setTimeout(() => {
            window.scrollBy(0, -100);
        }, 2000);
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <button className={`${isVisible ? 'fixed bottom-8 right-8 block' : 'hidden'} bg-gray-800 text-white px-4 py-2 rounded shadow hover:bg-gray-700`}onClick={scrollToTop}>
            Scroll to Top
        </button>
    );
};