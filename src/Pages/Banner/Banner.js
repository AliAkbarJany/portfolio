import React from 'react';
import './Banner.css'
import my from '../../images/my/my.jpg'


const Banner = () => {
    return (
        <div class="hero min-h-screen text-white" style={{ "backgroundColor": "#6F1E51" }}>
            <div class="hero-content flex-col lg:flex-row">
                <img src={my} class="lg:max-w-lg rounded-lg shadow-2xl" />
                <div>
                    <h1 class="lg:text-5xl font-bold">MD. ALI AKBAR</h1>
                    <h1 class="lg:text-5xl font-bold">I AM A <span style={{"color":"#FBBD23"}} >FRONTEND DEVELOPER</span> </h1>
                   
                    <p class="banner-text py-6 ">
                            I am very ambitious frontend developer. I am quietly confident and love to take challenge. If I want to define myself in one sentence that would be a family person,
                            a good badminton player and a travel freak person.
                    </p>

                    <a href="https://drive.google.com/uc?export=download&id=14IEdX9o90H-eNhdQadV4h7feeBHTt1Py" target="_blank">
                        <button class="btn btn-accent">DOWNLOAD RESUME</button>
                    </a>

                </div>
            </div>
        </div>
    );
};

export default Banner;