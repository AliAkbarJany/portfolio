import React from 'react';
import './Electric.css';
import { Link } from 'react-router-dom';
import { AiFillGithub } from "react-icons/ai";
import { CgMediaLive } from "react-icons/cg";
import electric1 from '../../images/electric/Electric1.PNG'
import electric2 from '../../images/electric/Electric2.PNG'
import electric3 from '../../images/electric/Electric3.PNG'

const Electric = () => {
    return (
        <div className='text-white  font-bold' style={{ "backgroundColor": "#6F1E51" }}>
            <div>
                <h2 className='text-3xl' style={{ "color": "#FBBD23" }}>ELECTRIC WAREHOUSE</h2>
            </div>
            <div className='electric-style flex justify-center items-center flex-col mt-5'>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11 '>
                    <div class="card card-compact w-full bg-base-100 shadow-xl">
                        <figure><img className='w-full' src={electric1} alt="electric" /></figure>
                    </div>
                    <div class="card card-compact w-full bg-base-100 shadow-xl">
                        <figure><img className='w-full' src={electric2} alt="electric" /></figure>
                    </div>
                    <div class="card card-compact w-full bg-base-100 shadow-xl">
                        <figure><img className='w-full' src={electric3} alt="electric" /></figure>
                    </div>
                </div>
                <div>
                    <h2 className='text-3xl underline'>Features of Projects</h2>

                    <div className=''>
                        <li className='text-left'>This is the pagination base website where customers can see all products by using pagination.</li>
                        <li className='text-left'>
                            User can easily delete and add devices.
                        </li>
                        <li className='text-left'>In this website has been used Firebase authentication system.</li>
                    </div>
                </div>
                <div className='mt-5'>
                    <div class="card-actions btn-group">
                        <button class="btn btn-accent font-bold">
                            <a href="https://assignment-11-ca5e6.web.app/" target="_blank">
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
                            <a href="https://github.com/AliAkbarJany/electric-warehouse-client" target="_blank">
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
                        <button class="btn btn-accent font-bold">
                            <a href="https://github.com/AliAkbarJany/electric-warehouse-server" target="_blank">
                                <div className='grid justify-items-center'>
                                    <div className=''>
                                        <AiFillGithub ></AiFillGithub>
                                    </div>
                                    <div>
                                        SERVER SIDE
                                    </div>
                                </div>
                            </a>
                        </button>
                    </div>

                </div>
            </div>
            <div class="card-actions btn-group mt-5">

                <button class="btn btn-warning font-bold"><Link to='/bike'>PREVIOUS</Link></button>
                <button class="btn btn-warning font-bold"><Link to='/wedding'>NEXT</Link></button>

            </div>
        </div>
    );
};

export default Electric;