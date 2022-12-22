import React from 'react';
import './Technology.css';
import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade';
import { DiNodejs } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiHeroku } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { AiFillGithub } from "react-icons/ai";
import { GiDaisy } from "react-icons/gi";

const Technology = () => {
    return (
        <div id="technology" className='pt-8 text-white' style={{ "backgroundColor": "#6F1E51" }}>
            <div>
                <h2 className='text-5xl text-white font-bold'>TECHNOLOGIES</h2>
            </div>
            <Fade left>
                <div className='flex justify-center items-center py-8'>
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 '>
                        <div className=' logo'>
                            <div>
                                <p className=' text-8xl '><DiNodejs color='#6EA560' ></DiNodejs> </p>
                                <p>Node.Js</p>
                            </div>
                        </div>
                        <div className='logo '>
                            <div>
                                <p className=' text-8xl '><DiReact color='#5ED3F3' ></DiReact> </p>
                                <p>React.js</p>
                            </div>

                        </div>
                        <div className=' logo '>
                            <div className='grid grid-col'>
                                <p className=' text-8xl '><SiMongodb color='Green' ></SiMongodb> </p>
                                <p>MongoDb</p>
                            </div>

                        </div>
                        <div className=' logo '>
                            <div>
                                <p className=' text-8xl '><SiFirebase color='Orange' ></SiFirebase> </p>
                                <p>Firebase</p>
                            </div>

                        </div>
                        <div className='logo '>
                            <div>
                                <p className=' text-8xl '><DiJavascript1 color='yellow' ></DiJavascript1> </p>
                                <p>Java Script</p>
                            </div>

                        </div>
                        <div className='logo '>
                            <div>
                                <p className=' text-8xl '><SiHtml5 color='#E85D28' ></SiHtml5> </p>
                                <p>HTML5</p>
                            </div>
                        </div>
                        <div className='logo '>
                            <div>
                                <p className=' text-8xl '><DiCss3 color='#E4E4E4' ></DiCss3> </p>
                                <p>CSS3</p>
                            </div>
                        </div>
                        <div className='logo '>
                            <div>
                                <p className=' text-8xl '><SiBootstrap color='#593C80' ></SiBootstrap> </p>
                                <p>Bootstrap</p>
                            </div>
                        </div>
                        <div className='logo '>
                            <div>
                                <p className=' text-8xl '><SiExpress color='blue' ></SiExpress> </p>
                                <p>Express.Js</p>
                            </div>
                        </div>
                        <div className='logo '>
                            <div>
                                <p className=' text-8xl '><SiHeroku color='#645FA1' ></SiHeroku> </p>
                                <p>Heroku</p>
                            </div>
                        </div>
                        <div className='logo '>
                            <div>
                                <p className=' text-8xl '><AiFillGithub color='white' ></AiFillGithub> </p>
                                <p>Github</p>
                            </div>
                        </div>
                        <div className='logo '>
                            <div>
                                <p className=' text-8xl '><GiDaisy color='#FFFFFF' ></GiDaisy> </p>
                                <p>DaisyUI</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>


        </div>
    );
};

export default Technology;