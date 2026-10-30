import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import './certificates.css';
import carw from '../assets/images/projectsSS/carsw.png';

// Dummy certificate data — replace with your real certificates later
const certificates = [
    {
        title: 'Front-End Web Development',
        description: 'Completed an intensive front-end web development course covering HTML, CSS, JavaScript, and React fundamentals with hands-on projects.',
        image: carw,
        link: 'https://example.com/certificate-1',
    },
    {
        title: 'Front-End Web Development',
        description: 'Completed an intensive front-end web development course covering HTML, CSS, JavaScript, and React fundamentals with hands-on projects.',
        image: carw,
        link: 'https://example.com/certificate-1',
    },

];

const Certificates = () => {
    return (
        <div className='certificates-page'>
            <Navbar />
            <div className='certificates-container'>
                <h1>My Certificates</h1>
                <p>Here you can find all of my earned certificates and achievements</p>

                <div className='certificates-main'>
                    <h2>Certificates :</h2>
                    <p>courses and certifications I've completed :</p>
                    <div className='certificates-cards-holder'>
                        {certificates.map((cert, index) => (
                            <div className='certificate-card' key={index}>
                                <div className='certificate-img-container'>
                                    <img src={cert.image} alt={cert.title} />
                                </div>
                                <h4>{cert.title}</h4>
                                <p>{cert.description}</p>
                                <div className='certificate-buttons'>
                                    <a href={cert.link} target='_blank' rel='noopener noreferrer'>
                                        View Certificate
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Certificates;
