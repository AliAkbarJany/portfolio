import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Project from '../Projects/Project';
import Footer from '../Shared/Footer/Footer';
import Technology from '../Technology/Technology';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            
            <Technology></Technology>
            <Project></Project>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;