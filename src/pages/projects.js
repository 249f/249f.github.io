import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import './projects.css'
import AmanakSS from '../assets/images/projectsSS/amanak.png';
import ZaytooonSS from '../assets/images/projectsSS/zaytooon.png';
import dbd from '../assets/images/projectsSS/dbd.png';
import d3g from '../assets/images/projectsSS/3dg.png';
import carw from '../assets/images/projectsSS/carsw.png';
import ptw from '../assets/images/projectsSS/ptw.png';
import ssmp from '../assets/images/projectsSS/ssmp.png';
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
                            <div className='production-img-container'><img src={AmanakSS} alt='amanak img' /></div>
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

                            <div className='production-img-container'><img src={ZaytooonSS} alt='Zaytooon img' /></div>
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
                        <div className='hobby-card'>
                            <div className='production-img-container'>
                                <img src={dbd} alt="design by drop img" />
                            </div>
                            <h4>
                                Design By Drop (DBD)
                            </h4>
                            <p>
                                Design By Drop is an open source tool , i built it to help HTML CSS beginners to create simple designs without writing code, simple yet effective tool uses shapes and other HTML elements to create designs, allowing users to change colors, sizes, positions, and other properties of the elements, and export the code to use in their projects, with the ability to download a ready to use HTML file with all the styles and structure.
                            </p>
                            <div className='production-buttons'>
                                <a href="https://design-by-drop.vercel.app" target='_blank' rel='noopener noreferrer'>Visit Website</a>
                                <a href='https://github.com/249f/design_by_drop'>See on GitHub</a>

                            </div>


                        </div>
                        {/*Second hobby card*/}
                        <div className='hobby-card'>
                            <div className='production-img-container'>
                                <img src={d3g} alt="3d-g img" />
                            </div>
                            <h4>
                                3D GitHub Contribution Grid
                            </h4>
                            <p>
                                this is a tool to help pepole to genrate a 3d contribution graph for thire github profile , it's one of the most easiest and fastest ways to create a 3d contribution graph for your github profile , without any extra steps or coding knowledge , just paste your username and let the tool do the rest ,
                            </p>
                            <div className='production-buttons'>
                                <a href="https://3d-g.vercel.app" target='_blank' rel='noopener noreferrer'>Visit Website</a>
                                <a href='https://github.com/249f/3D-github-readme-only'>See on GitHub</a>

                            </div>


                        </div>
                        {/*Third hobby card*/}
                        <div className='hobby-card'>
                            <div className='production-img-container'>
                                <img src={carw} alt="cars dealership img" />
                            </div>
                            <h4>
                                Cars DealerShip Website
                            </h4>
                            <p>
                                a simple website for a cars dealership , it includes a list of cars with their prices and specifications.
                                <br />
                                <br />
                                for this website i used Next.js , the main goal was to practice using Next.js Framework and get used to it's features.
                            </p>
                            <div className='production-buttons'>
                                <a href="https://cars-dealership-website.vercel.app" target='_blank' rel='noopener noreferrer'>Visit Website</a>
                                <a href='https://github.com/249f/cars-dealership-website'>See on GitHub</a>

                            </div>


                        </div>


                        {/*4th hobby card*/}
                        <div className='hobby-card'>
                            <div className='production-img-container'>
                                <img src={ptw} alt="prayer times website img" />
                            </div>
                            <h4>
                                Prayer Times Website
                            </h4>
                            <p>
                                a website that shows prayer times for a specific city , it includes a list of prayer times for the day depnding on the Selected city.
                                <br />
                                <br />
                                for this website i used pure HTML , CSS , JavaScript , the main goal was to practice connecting with the api.
                            </p>
                            <div className='production-buttons'>
                                <a href="https://pt-w.vercel.app" target='_blank' rel='noopener noreferrer'>Visit Website</a>
                                <a href='https://github.com/249f/Prayer-Times-Website'>See on GitHub</a>

                            </div>


                        </div>


                        {/*5th hobby card*/}
                        <div className='hobby-card'>
                            <div className='production-img-container'>
                                <img src={ssmp} alt="simple social media platform img" />
                            </div>
                            <h4>
                                Simple Social Media Platform (SSMP)
                            </h4>
                            <p>
                                a simple social media platform , it's similar to facebook, users can create posts, comment on them.
                                <br />
                                <br />
                                for this website i used pure HTML , CSS , JavaScript , i used a free API provided by the Course, work still in progress.
                            </p>
                            <div className='production-buttons'>
                                <a href="https://simple-social-media-platform.vercel.app" target='_blank' rel='noopener noreferrer'>Visit Website</a>
                                <a href='https://github.com/249f/simple-social-media-platform'>See on GitHub</a>

                            </div>


                        </div>


















                    </div>




                </div>
            </div >
        </div>
    );
};


export default Projects;
