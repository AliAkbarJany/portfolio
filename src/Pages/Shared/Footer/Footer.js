import React from 'react';
import { DiReact } from "react-icons/di";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
    const year = new Date().getFullYear()
    const date = new Date().getDate();
    return (
        <div className=''style={{ "backgroundColor": "#6F1E51" }}>
            <footer class="footer footer-center p-10 text-neutral-content rounded ">

                <div>
                    <div class="grid grid-flow-col gap-4">
                        <a href="https://github.com/" target="_blank">
                            <p className='text-7xl'><AiFillGithub></AiFillGithub></p>
                        </a>
                        
                       
                    </div>
                </div>
                <div>
                    <p className=''>copyright &copy;Year:{year} Date:{date} all rights reserve</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;