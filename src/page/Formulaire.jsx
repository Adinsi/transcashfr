import React from 'react';
import Footer from '../component/Footer';
import Form from '../component/Form';
import Heroes from '../component/Heroes';
import Navigation from '../component/Navigation';

const Formulaire = () => {
    return (
        <>
            <Navigation />
            <Heroes />
            <Form/>
            <Footer/>
        </>
    );
};

export default Formulaire;