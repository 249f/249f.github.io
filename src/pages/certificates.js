import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import './certificates.css';
import EFSET from '../assets/images/projectsSS/EFSET.png';
import jsc from '../assets/images/projectsSS/jsc.png';

// Dummy certificate data — replace with your real certificates later
const certificates = [
    {
        title: 'JavaScript Course',
        description: 'javascript course from nouvil Academy, it was a great course that helped me to improve my javascript skills',
        image: jsc,
        link: 'https://ar.nouvil.net/verify/C3D2C4F8F15C092B3E0A',
    },
    {
        title: 'EF SET English Certificate (C1 Advanced)',
        description: 'EF SET certificate in English, it was a great certificate that helped me test my english skills, getting advanced c1 level in english, it was a great achievement as this test helped me a lot in my job hunting process',
        image: EFSET,
        link: 'https://cert.efset.org/BUEkd3',
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
