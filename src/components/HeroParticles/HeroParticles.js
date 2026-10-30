import React, { useState, useEffect, useRef, useMemo } from 'react';
import './HeroParticles.css';

const PARTICLE_COUNT = 40;

const HeroParticles = () => {
    const containerRef = useRef(null);
    const mouseRef = useRef({ x: 0.5, y: 0.5 });
    const particleDataRef = useRef([]);
    const animFrameRef = useRef(null);
    const [, forceUpdate] = useState(0);

    // Generate particle configs once
    const particles = useMemo(() => {
        const arr = [];
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            const depth = Math.random();
            const size = 4 + Math.random() * 10 + depth * 8;
            const type = Math.random();
            arr.push({
                id: i,
                baseX: Math.random() * 100,
                baseY: Math.random() * 100,
                size,
                depth,
                speedX: (Math.random() - 0.5) * 0.12,
                speedY: (Math.random() - 0.5) * 0.08 - 0.015,
                opacity: 0.25 + depth * 0.5,
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 0.4,
                variant: type < 0.3 ? 'diamond' : type < 0.65 ? 'circle' : 'dot',
                offsetX: 0,
                offsetY: 0,
            });
        }
        return arr;
    }, []);

    useEffect(() => {
        particleDataRef.current = particles.map(p => ({ ...p }));
    }, [particles]);

    // Mouse tracking
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleMouseMove = (e) => {
            const rect = container.getBoundingClientRect();
            mouseRef.current.x = (e.clientX - rect.left) / rect.width;
            mouseRef.current.y = (e.clientY - rect.top) / rect.height;
        };

        container.addEventListener('mousemove', handleMouseMove);
        return () => container.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Animation loop — updates DOM directly for performance
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const animate = () => {
            const mx = mouseRef.current.x;
            const my = mouseRef.current.y;
            const data = particleDataRef.current;

            data.forEach((p) => {
                // Drift
                p.baseX += p.speedX;
                p.baseY += p.speedY;
                p.rotation += p.rotationSpeed;

                // Wrap around
                if (p.baseX > 104) p.baseX = -4;
                if (p.baseX < -4) p.baseX = 104;
                if (p.baseY > 104) p.baseY = -4;
                if (p.baseY < -4) p.baseY = 104;

                // Mouse parallax
                const strength = p.depth * 35;
                p.offsetX = (mx - 0.5) * strength;
                p.offsetY = (my - 0.5) * strength;

                // Direct DOM update
                const el = container.querySelector(`[data-particle="${p.id}"]`);
                if (el) {
                    el.style.left = `${p.baseX}%`;
                    el.style.top = `${p.baseY}%`;
                    el.style.transform = `translate(${p.offsetX}px, ${p.offsetY}px) rotate(${p.rotation}deg)`;
                }
            });

            animFrameRef.current = requestAnimationFrame(animate);
        };

        animFrameRef.current = requestAnimationFrame(animate);
        return () => {
            if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
        };
    }, []);

    return (
        <div className="hero-particles" ref={containerRef}>
            {particles.map((p) => (
                <div
                    key={p.id}
                    data-particle={p.id}
                    className={`hero-particle particle-${p.variant}`}
                    style={{
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        left: `${p.baseX}%`,
                        top: `${p.baseY}%`,
                        opacity: p.opacity,
                    }}
                />
            ))}
        </div>
    );
};

export default HeroParticles;
