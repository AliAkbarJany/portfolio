import React from 'react';
import './Bike.css'
import { Link } from 'react-router-dom';
import { AiFillGithub } from "react-icons/ai";
import { CgMediaLive } from "react-icons/cg";
import bike1 from '../../images/bike/Bike1.PNG'
import bike2 from '../../images/bike/Bike2.PNG'
import bike3 from '../../images/bike/Bike3.PNG'

const Bike = () => {
    return (
        <div className='text-white  font-bold' style={{ "backgroundColor": "#6F1E51" }}>
            <div>
                <h2 className='text-3xl' style={{ "color": "#FBBD23" }}>BIKE EQUIPMENT</h2>
            </div>
            <div className='bike-style flex justify-center items-center flex-col mt-5'>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11 '>
                    <div class="card card-compact w-full bg-base-100 shadow-xl">
                        <figure><img src={bike1} alt="bike" className='w-full' /></figure>
                    </div>
                    <div class="card card-compact w-full bg-base-100 shadow-xl">
                        <figure><img src={bike2} alt="bike" className='w-full' /></figure>
                    </div>
                    <div class="card card-compact w-full bg-base-100 shadow-xl">
                        <figure><img src={bike3} alt="bike" className='w-full' /></figure>
                    </div>
                </div>

                <div>
                    <h2 className='text-3xl underline'>Features of Projects</h2>
                    <div>

                        <li className='text-left'>This is the website where customers can book order and reviews about the products.</li>
                        <li className='text-left'>
                            Admin can manage order by adding and deleting products.
                        </li>
                        <li className='text-left'>In this website has been used Firebase authentication system.</li>

                    </div>
                </div>

                <div className='mt-5'>
                    <div class="card-actions btn-group ">
                        <button class="btn btn-accent font-bold">
                            <a href="https://bike-equipments.netlify.app/" target="_blank">
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
                            <a href="https://github.com/AliAkbarJany/bike-equipment-client" target="_blank">
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
                            <a href="https://github.com/AliAkbarJany/bike-equipment-server" target="_blank">
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

                <button class="btn btn-warning font-bold"><Link to='/home'>HOME</Link></button>
                <button class="btn btn-warning font-bold"><Link to='/electric'>NEXT</Link></button>

            </div>
        </div>
    );
};

export default Bike;