import React, { useEffect } from 'react';
import './ContactModal.css';
import { SiWhatsapp, SiGithub, SiGmail, SiFacebook, SiX, SiDiscord, SiTelegram, SiInstagram } from '@icons-pack/react-simple-icons';
import { FaLinkedin } from 'react-icons/fa';

const socialLinks = [
    { href: 'https://wa.me/249998651881', icon: <SiWhatsapp size={36} />, label: 'WhatsApp' },
    { href: 'mailto:real249ali@gmail.com', icon: <SiGmail size={36} />, label: 'Email' },
    { href: 'https://www.linkedin.com/in/ali-abdellatif-1482693a1', icon: <FaLinkedin size={36} />, label: 'LinkedIn' },
    { href: 'https://github.com/249f', icon: <SiGithub size={36} />, label: 'GitHub' },
    { href: 'https://www.facebook.com/lgezz', icon: <SiFacebook size={36} />, label: 'Facebook' },
    { href: 'https://twitter.com/249_ff', icon: <SiX size={36} />, label: 'X' },
    { href: 'https://discord.gg/mSYMs58t', icon: <SiDiscord size={36} />, label: 'Discord' },
    { href: 'https://t.me/ali_abdellatif', icon: <SiTelegram size={36} />, label: 'Telegram' },
    { href: 'https://www.instagram.com/ali.abdelllatif', icon: <SiInstagram size={36} />, label: 'Instagram' },
];

const ContactModal = ({ isOpen, onClose }) => {
    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    // Close on Escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    return (
        <div
            className={`contact-modal-overlay${isOpen ? ' open' : ''}`}
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label="Contact me"
        >
            <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
                <button className="contact-modal-close" onClick={onClose} aria-label="Close modal">
                    ✕
                </button>
                <div className="contact-modal-header">
                    <h2>Get in Touch</h2>
                    <p>Feel free to reach out on any platform</p>
                </div>
                <div className="contact-modal-grid">
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-modal-link"
                        >
                            {link.icon}
                            <span>{link.label}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContactModal;
