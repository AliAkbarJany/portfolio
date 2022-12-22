import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const menuItems=<>
        <li><Link to="/">Home</Link></li>
        <li><a href="/#project">Projects</a></li>
        <li><a href="/#technology">Technology</a></li>
        <li><a href="/#contact">Contact</a></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><button className='btn btn-accent'><a href="https://drive.google.com/file/d/14IEdX9o90H-eNhdQadV4h7feeBHTt1Py/view?usp=sharing" target="_blank">Resume</a></button></li>
        
    </>
    return (
        <div class="navbar font-bold" style={{"backgroundColor":"#6F1E51"}}>
            <div class="navbar-start">
                <div class="dropdown text-white">
                    <label tabindex="0" class="btn btn-ghost  lg:hidden ">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52" style={{"backgroundColor":"#6F1E51"}}>
                        {menuItems}
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-2xl text-white">PORTFOLIO</a>
            </div>
            <div class=" hidden lg:flex text-white">
                <ul class="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            
        </div>
    );
};

export default Navbar;