import React from 'react';
import './LandingPage.css';
import Navbar from '../components/Navbar/Navbar';
import MyPicture from '../assets/images/myPicture.webp';
import { SiAppwrite, SiCss, SiGithub, SiHtml5, SiJavascript, SiReact, SiVercel, SiNetlify, SiGit, SiWhatsapp, SiGmail, SiFacebook, SiX, SiDiscord, SiTelegram, SiInstagram, SiFigma, SiNextdotjs, SiSupabase, SiKalilinux } from '@icons-pack/react-simple-icons';
import { FaLinkedin } from 'react-icons/fa';

const skills = [<SiAppwrite size={50} />, <SiHtml5 size={50} />, <SiCss size={50} />, <SiJavascript size={50} />, <SiReact size={50} />, <SiGithub size={50} />, <SiFigma size={50} />, <SiVercel size={50} />, <SiNetlify size={50} />, <SiGit size={50} />, <SiNextdotjs size={50} />, <SiSupabase size={50} />, <SiKalilinux size={50} />];


const LandingPage = () => {
    return (

        <div className="landing-page" id='home'>
            <Navbar />
            {/*hero section*/}
            <div className="hero">

                <img src={MyPicture} alt="ali" />
                <div className="hero-text">
                    <h1>ALi Abdellatif</h1>
                    <p>Software Engineering Student with a real world hands-on experience</p>


                </div>



            </div>
            {/*Projects section*/}
            <div className='projects' id='projects'>
                <div className='projects-title'>
                    <h1> Hands-on Experience </h1>
                    <p> learned many things from publishing projects to production </p>
                </div>

                {/* projects cards */}
                <div className='project-cards-holder'>

                    <a href='https://amanak-sd.com' className='amanak-card' target='_blank' rel='noopener noreferrer'>


                        <h1> Warehouse Management Ecosystem </h1>
                        <p>
                            Developed an end-to-end Warehouse Management and Sales Ecosystem designed for reliability in regions with unstable network infrastructure. The system was architected to handle complex inventory movements while maintaining 100% data integrity during connection drops.
                        </p>
                        <p>
                            <ul>
                                <li> <strong> Role-Based Access Control : </strong> multi-tiered authorization system defining specific permissions for Admins, Warehouse Managers, and Sales Staff. to ensure data security and operational accountability.</li>
                                <li> <strong> Reliability : </strong> Implemented Atomic Transactions to prevent partial data entries or ghost stock issues, ensures that if a connection fails mid transaction the data remains consistent.</li>
                                <li> <strong> Optimized Performance : </strong> Utilized smart caching and lightweight query structures to minimize bandwidth consumption, delivering smooth user experience even on unstable networks.</li>
                                <li> <strong> Bulk Operations : </strong> Developed a specialized sales module capable of processing large scale updates, such as Global Percentage based Price Adjustments, efficiently and reliably.</li>
                            </ul>
                        </p>

                    </a>

                    <a href='https://design-by-drop.vercel.app' className='dbd-card' target='_blank' rel='noopener noreferrer'>

                        <h1> Design By Drop </h1>
                        <p>
                            built a free open source tool to help HTML CSS beginners to create simple designs without writing code, simple yet effective tool uses shapes and other HTML elements to create designs, allowing users to change colors, sizes, positions, and other properties of the elements, and export the code to use in their projects, with the ability to download a ready to use HTML file with all the styles and structure.
                        </p>

                    </a>

                    <a href='https://play.google.com/store/apps/details?id=com.zaytooon.sudandelivery' className='Zaytooon-card' target='_blank' rel='noopener noreferrer'>

                        <h1> Delivery System </h1>
                        <p>
                            Been a part of a team that built a completed food Delivery System, which includes a customer app, a driver app, and an admin panel. <br /> <br />
                            Zaytooon is name of the production app, which is launched and used currently in Sudan, custumer app is now live on google play with over 1000+ downloads , you can search "Zaytooon Sudan" on google play to check it out
                        </p>

                    </a>

                    <a href='https://github.com/249f' className='d4-card'>
                        <h1> Under Development </h1>
                        <p>
                            {/* <img src="https://3d-g.vercel.app/api/flat?user=249f" alt="2d flat graph" />  */}

                        </p>

                    </a>


                </div>







            </div>


            {/* skills section */}
            <div className='skills' id='skills'>
                <div className='skills-title'>
                    <h1>Skills</h1>
                    <p>improving and learning everyday</p>
                </div>


                <div className='skills-content'>

                    <div className="skills-marquee-container">
                        <div className="skills-marquee-track">

                            {/* Group 1 */}
                            <div className="skills-text-holder">
                                {skills.map((skill, index) => (
                                    <h1 key={`g1-${index}`} className="skill-text">{skill}</h1>
                                ))}
                            </div>

                            {/* Group 2 (The Loop Closer) */}
                            <div className="skills-text-holder">
                                {skills.map((skill, index) => (
                                    <h1 key={`g2-${index}`} className="skill-text">{skill}</h1>
                                ))}
                            </div>

                        </div>
                    </div>

                    {/* skills  details */}

                    <h1 className='title'>Tech Stack :</h1>
                    <div className='skills-details'>
                        <div className='skill-card'>
                            <h1>HTML</h1>
                            <p>Advanced Level with deep understanding of syntax and accessibility.</p>
                        </div>
                        <div className='skill-card-css'>
                            <h1>CSS</h1>
                            <p>Good understanding with the ability to create complex and stunning layouts and animations, while keeping it responsive with different screen sizes.</p>
                        </div>
                        <div className='skill-card-appwrite'>
                            <h1>Appwrite</h1>
                            <p>Been a heavy user of appwrite for the past year, used it in multiple projects and have a deep understanding of its features and capabilities.</p>
                        </div>
                        <div className='skill-card'>
                            <h1>JavaScript</h1>
                            <p>Basic understanding with the ability to create simple and interactive web pages.</p>
                        </div>
                        <div className='skill-card'>
                            <h1>React.js</h1>
                            <p>Basic understanding with the ability to create simple and interactive web applications.</p>
                        </div>




                    </div>

                    {/* Technical skills */}

                    <h1 className='title'>Soft Skills :</h1>
                    <div className='soft-skills'>

                        <div className='soft-skill-card'>
                            <h2> Risk prediction :  </h2>
                            <p>
                                I proactively analyze the impact of every architectural decision, ensuring system stability while minimizing potential technical debt.
                            </p>
                        </div>
                        <div className='soft-skill-card'>
                            <h2> Problem Solving :  </h2>
                            <p>
                                I approach complex challenges with a logic driven mindset, focusing on finding the most efficient, scalable solutions for the end user.
                            </p>
                        </div>

                        <div className='soft-skill-card'>
                            <h2>Budget Utilization : </h2>
                            <p>
                                Finding the best way to lower the expenses of the project and maximize the benefits.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact section */}
            <div className='contact' id='contact'>
                <div className='contact-title'>
                    <h1>Contact Me :</h1>
                    <p>Feel free to get in touch with me on any socail media platform</p>
                </div>
                <div className='contact-content'>
                    <a href="https://wa.me/249928283601" className='contact-card'>
                        <SiWhatsapp size={45} />
                        <h6>Whatsapp</h6>
                    </a>
                    <a href="mailto:al999aliko@gmail.com" className='contact-card'>
                        <SiGmail size={45} />
                        <h6>Email</h6>
                    </a>
                    <a href="https://www.linkedin.com/in/ali-abdellatif-1482693a1" className='contact-card'>
                        <FaLinkedin size={45} />
                        <h6>Linkedin</h6>
                    </a>
                    <a href="https://github.com/249f" className='contact-card'>
                        <SiGithub size={45} />
                        <h6>Github</h6>
                    </a>

                    <a href="https://www.facebook.com/lgezz" className='contact-card'>
                        <SiFacebook size={45} />
                        <h6>Facebook</h6>
                    </a>
                    <a href="https://twitter.com/249_ff" className='contact-card'>
                        <SiX size={45} />
                        <h6>X</h6>
                    </a>
                    <a href="https://discord.gg/mSYMs58t" className='contact-card'>
                        <SiDiscord size={45} />
                        <h6>Discord</h6>
                    </a>
                    <a href="https://t.me/otp_ali" className='contact-card'>
                        <SiTelegram size={45} />
                        <h6>Telegram</h6>
                    </a>
                    <a href="https://www.instagram.com/249f4" className='contact-card'>
                        <SiInstagram size={45} />
                        <h6>Instagram</h6>
                    </a>
                </div>

            </div>




        </div >

    );


};
export default LandingPage;