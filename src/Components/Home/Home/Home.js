import React from 'react';
import Footer from '../../Share/Footer/Footer';
import AboutArea from '../AboutArea/AboutArea';
import Appointment from '../Appointment/Appointment';
import Header from '../Header/Header';
import PreventArea from '../PreventArea/PreventArea';
import ProcessArea from '../ProcessArea/ProcessArea';
import Products from '../Products/Products';
import Project from '../Project/Project';
import Services from '../Services/Services';


const Home = () => {
    return (
        <>
         <Header/>   
         <AboutArea/>
         <Services/>
         <PreventArea />
         <ProcessArea/>
         <Appointment/>
         <Project/>
         <Products/>
         <Footer />
        </>
    );
};

export default Home;