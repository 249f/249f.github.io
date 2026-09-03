import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import './projects.css'
import AmanakSS from '../assets/images/projectsSS/amanak.png';
import ZaytooonSS from '../assets/images/projectsSS/zaytooon.png';
import { Link } from 'react-router-dom';
const Projects = () => {
    return (
        <div className='main-projects'>
            <Navbar />
            <div className='projects-container'>
                {/*Title*/}
                <h1>My Projects</h1>
                <p> here you can get an extended look at all of the projects I've worked on </p>
                {/*Projects Cards*/}
                <div className='projects-main'>
                    <h2>Production Projects :</h2>
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
                                <Link to='/projects/amanak'>Read more</Link>

                            </div>

                        </div>
                        {/*Second Production Card*/}
                        <div className='production-card'>
                            <img src={ZaytooonSS} alt='Zaytooon img' />
                            <h4>Zaytooon</h4>
                            <p>
                                Zaytooon is a food delivery platform , building Zaytooon was one of the most challenging projects I've worked on as it included a customer app, a delivery driver app, and an admin panel.
                                <br></br>
                                <br></br>
                                Zaytooon is now live on Google Play with over 1000+ downloads , you can search "Zaytooon Sudan" on Google Play to check it out.
                            </p>
                            <div className='production-buttons'>
                                <a href="https://play.google.com/store/apps/details?id=com.zaytooon.sudandelivery" target='_blank' rel='noopener noreferrer'>See on Google Play</a>
                                <Link to='/projects/zaytooon'>Read more</Link>

                            </div>

                        </div>


                    </div>

                    <h2>Hobby Projects :</h2>
                    <p>these are projects I worked on through out my learning journey :</p>
                    <div className='hobby-cards-holder'>
                        <div className='dbd-card'>
                            {/* <h4>i'm just lazzy to finish this page today</h4> */}
                            {/* <p>Design By Drop is a free open source tool to help HTML CSS beginners to create simple designs without writing code.</p> */}

                        </div>


                    </div>




                </div>
            </div >
        </div>
    );
};


export default Projects;
