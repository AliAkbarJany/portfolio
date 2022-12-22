import React from 'react';
import './Wedding.css';
import { Link } from 'react-router-dom';
import { AiFillGithub } from "react-icons/ai";
import { CgMediaLive } from "react-icons/cg";
import wedding1 from '../../images/wedding/Wedding1.PNG'
import wedding2 from '../../images/wedding/Wedding2.PNG'
import wedding3 from '../../images/wedding/Wedding3.PNG'

const Wedding = () => {
    return (
        <div className='text-white font-bold' style={{ "backgroundColor": "#6F1E51" }}>
            <div>
                <h2 className='text-3xl' style={{ "color": "#FBBD23" }}>RJ WEDDING PHOTOGRAPHY</h2>
            </div>
            <div className='wedding-style flex justify-center items-center flex-col mt-5'>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11 '>
                    <div class="card card-compact w-full bg-base-100 shadow-xl">
                        <figure><img className='w-full' src={wedding1} alt="wedding" /></figure>
                    </div>
                    <div class="card card-compact w-full bg-base-100 shadow-xl">
                        <figure><img className='w-full' src={wedding2} alt="wedding" /></figure>
                    </div>
                    <div class="card card-compact w-full bg-base-100 shadow-xl">
                        <figure><img className='w-full' src={wedding3} alt="wedding" /></figure>
                    </div>
                </div>
                <div>
                    <h2 className='text-3xl underline'>Features of Projects</h2>
                    <div>

                        <li className='text-left'>This is the frontend website</li>
                        <li className='text-left'>
                            User can Easily book for Photography.
                        </li>
                        <li className='text-left'>Sign up/Login system has been created using Firebase authentication system.</li>

                    </div>
                </div>
                <div className='mt-5'>
                    <div class="card-actions btn-group">

                        <button class="btn btn-accent font-bold">
                            <a href="https://assignment-ten-c55ee.web.app/" target="_blank">
                                <div className='grid justify-items-center'>
                                    <div className=''>
                                        <CgMediaLive ></CgMediaLive>
                                    </div>
                                    <div>
                                        LIVE SIDE
                                    </div>
                                </div>
                            </a>
                        </button>
                        <button class="btn btn-accent font-bold">
                            <a href="https://github.com/AliAkbarJany/RJ-wedding-photography" target="_blank">
                                <div className='grid justify-items-center'>
                                    <div className=''>
                                        <AiFillGithub ></AiFillGithub>
                                    </div>
                                    <div>
                                        CLIENT SIDE
                                    </div>
                                </div>
                            </a>
                        </button>

                    </div>
                    {/* <div class="card-actions">
                        <button class="btn btn-primary"> <Link to='/bike'>PROJECT DETAIL</Link> </button>
                    </div> */}
                </div>
            </div>
            <div class="card-actions btn-group mt-5">

                <button class="btn btn-warning font-bold"><Link to='/electric'>PREVIOUS</Link></button>
                {/* <button class="btn btn-warning"><Link to='/electric'>NEXT</Link></button> */}

            </div>
        </div>
    );
};

export default Wedding;