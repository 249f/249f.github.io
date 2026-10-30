import { useEffect } from 'react';

const useScrollReveal = () => {
    useEffect(() => {
        const revealClasses = [
            'scroll-reveal',
            'scroll-reveal-left',
            'scroll-reveal-right',
            'scroll-reveal-scale'
        ];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -60px 0px',
            }
        );

        // Observe all elements with scroll reveal classes
        revealClasses.forEach((cls) => {
            document.querySelectorAll(`.${cls}`).forEach((el) => {
                observer.observe(el);
            });
        });

        return () => observer.disconnect();
    }, []);
};

export default useScrollReveal;
