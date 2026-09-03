import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import './projects.css'
import AmanakSS from '../assets/images/projectsSS/amanak.png';
import { Link } from 'react-router-dom';
const Projects = () => {
    return (
        <div className='main-projects'>
            <Navbar />
            <div className='projects-container'>
                {/*Title*/}
                <h1>My Projects</h1>
                <p> here you can see an extended look at all of the projects I've worked on </p>
                {/*Projects Cards*/}
                <div className='projects-main'>
                    <h2>Production Projects</h2>
                    <p>these are projects that went to production and are used by real users and real data at this moment :</p>
                    <div className='production-cards-holder'>
                        <div className='production-card'>
                            <img src={AmanakSS} alt='amanak img' />
                            <h4>Amanak</h4>
                            <p>
                                Amanak is a Warehouse Management System that includes many features making it almost as an ERP system , it features a role based access control system ensuring that each user has access to only what they need and what they are allowed to do. also allowing the business owner to manage , follow , and control more than one warehouse at the same time from one dashboard.
                            </p>
                            <div className='production-buttons'>
                                <a href="https://amanak-sd.com/" target='_blank' rel='noopener noreferrer'>Visit Website</a>
                                <Link to='/amanak'>Read more</Link>

                            </div>

                        </div>


                    </div>





                </div>
            </div >
        </div>
    );
};


export default Projects;
