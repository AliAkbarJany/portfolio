import React from 'react';
import './Project.css';
import { Link } from 'react-router-dom';
import { AiFillGithub } from "react-icons/ai";
import { CgMediaLive } from "react-icons/cg";
import bike from '../../images/bike/Bike1.PNG';
import electric from '../../images/electric/Electric1.PNG';
import wedding from '../../images/wedding/Wedding1.PNG';
import foodNinja from '../../images/foodNinja/foodNinja_screen1.png';

const Project = () => {
    return (
        <div id="project" style={{ "backgroundColor": "#6F1E51" }}>
            <div>
                <h1 className='text-5xl text-white font-bold'>PROJECTS</h1>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8 flex justify-center items-center flex-col'>
                <div class="transparent-card w-full bg-base-100 shadow-xl ">
                    <figure class="px-10 pt-10">
                        <img src={foodNinja} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title font-bold" style={{ "color": "#FBBD23" }}>FOOD NINJA</h2>
                        <p className='font-bold'>This website is based on online Food odering system</p>
                        <p> It is a Full-Stack-Website</p>
                        <div class="card-actions btn-group">
                            <button class="btn btn-accent font-bold">
                                <a href="https://food-ninja-client.netlify.app//" target="_blank">
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
                        <div class="card-actions">
                            <button class="btn btn-warning"> <Link to='/foodNinja'>PROJECT DETAIL</Link> </button>
                        </div>
                    </div>

                </div>
                <div class="transparent-card w-full bg-base-100 shadow-xl ">
                    <figure class="px-10 pt-10">
                        <img src={bike} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title font-bold" style={{ "color": "#FBBD23" }}>BIKE EQUIPMENT</h2>
                        <p className='font-bold'>This website is based on Bike Parts management</p>
                        <p> It is a Full-Stack-Website</p>
                        <div class="card-actions btn-group">
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
                        <div class="card-actions">
                            <button class="btn btn-warning"> <Link to='/bike'>PROJECT DETAIL</Link> </button>
                        </div>
                    </div>

                </div>
                <div class="transparent-card w-full bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={electric} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title font-bold" style={{ "color": "#FBBD23" }}>ELECTRIC WAREHOUSE</h2>
                        <p className='font-bold'>This website is based on Warehouse of Electric Devices</p>
                        <p> It is a Full-Stack-Website</p>
                        <div class="card-actions btn-group font-bold">
                            <button class="btn btn-accent font-bold">
                                <a href="https://electric-warehouse-client.netlify.app/" target="_blank">
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
                        <div class="card-actions">
                            <button class="btn btn-warning"><Link to='/electric'>PROJECT DETAIL</Link></button>
                        </div>
                    </div>
                </div>
                {/* <div class="transparent-card w-full bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={wedding} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title font-bold" style={{ "color": "#FBBD23" }}>RJ WEDDING PHOTOGRAPHY</h2>
                        <p className='font-bold'>Website of Wedding Photography</p>
                        <p>It is just a Front-End Website </p>
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
                        <div class="card-actions">
                            <button class="btn btn-warning"><Link to='/wedding'>PROJECT DETAIL</Link></button>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Project;