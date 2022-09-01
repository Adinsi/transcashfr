import React from 'react';
import Footer from '../component/Footer';
import Heroes from '../component/Heroes';
import Navigation from '../component/Navigation';
import Section from '../component/Section';

const Home = () => {
    return (
        <>
            <Navigation />
            <Heroes />
            <Section />
            <Footer/>
           
        </>
    );
};

export default Home;