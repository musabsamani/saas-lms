import { useEffect } from 'react';

const useParallax = () => {
    const handleScroll = () => {
        const parallaxElements = document.querySelectorAll<HTMLElement>('.parallax');
        parallaxElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top / 10
            const speed = Number(element.getAttribute('data-speed')) || Math.random();
            const num = Math.round(elementTop * speed)
            const yPos = Math.sign(num) * Math.min(Math.abs(num), 100);
            element.style.transform = `translateY(${yPos}px)`
        });
    };
    useEffect(() => {

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
}

export default useParallax;
