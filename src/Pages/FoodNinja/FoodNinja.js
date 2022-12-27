import React from 'react';
import './FoodNinja.css'
import { AiFillGithub } from 'react-icons/ai';
import { CgMediaLive } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import foodNinja1 from '../../images/foodNinja/foodNinja_screen1.png'
import foodNinja2 from '../../images/foodNinja/foodNinja_screen2.png'
import foodNinja3 from '../../images/foodNinja/foodNinja_screen3.png'

const FoodNinja = () => {
    return (
        <div className='text-white  font-bold' style={{ "backgroundColor": "#6F1E51" }}>
            <div>
                <h2 className='text-3xl' style={{ "color": "#FBBD23" }}>FOOD NINJA</h2>
            </div>
            <div className='foodNinja-style flex justify-center items-center flex-col mt-5'>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11 '>
                    <div class="card card-compact w-full bg-base-100 shadow-xl">
                        <figure><img src={foodNinja1} alt="food" className='w-full' /></figure>
                    </div>
                    <div class="card card-compact w-full bg-base-100 shadow-xl">
                        <figure><img src={foodNinja2} alt="food" className='w-full' /></figure>
                    </div>
                    <div class="card card-compact w-full bg-base-100 shadow-xl">
                        <figure><img src={foodNinja3} alt="food" className='w-full' /></figure>
                    </div>
                </div>

                <div>
                    <h2 className='text-3xl underline'>Features of Projects</h2>
                    <div>

                        <li className='text-left'>In this website, admins will be able to make Restaurant owner (vendor).</li>
                        <li className='text-left'>
                            Restaurant owners would be able to add and delete food items.
                        </li>
                        <li className='text-left'>Users can easily add and delete cart for purchasing foods.</li>
                        <li className='text-left'>
                            The payment will be handled using ‘Stripe checkout’ which is an international payment processing system. That’s mean users can use any types of international credit card to pay for the service.
                        </li>
                        <li className='text-left'>Sign up/Login system has been created using Firebase and React-hook-form authentication system.</li>

                    </div>
                </div>

                <div className='mt-5'>
                    <div class="card-actions btn-group ">
                        <button class="btn btn-accent font-bold">
                            <a href="https://food-ninja-client.netlify.app/" target="_blank">
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
                            <a href="https://github.com/AliAkbarJany/food-ninja" target="_blank">
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
                            <a href="https://github.com/AliAkbarJany/food-ninja-server" target="_blank">
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

export default FoodNinja;