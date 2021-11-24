import React from 'react';
import Footer from '../../Share/Footer/Footer';
import AboutArea from '../AboutArea/AboutArea';
import Header from '../Header/Header';
import PreventArea from '../PreventArea/PreventArea';
import ProcessArea from '../ProcessArea/ProcessArea';
import Products from '../Products/Products';
import Services from '../Services/Services';
// import HeaderMain from '../HeaderMain/HeaderMain';

const Home = () => {
    return (
        <>
         <Header/>   
         <AboutArea/>
         <Services/>
         <PreventArea />
         <ProcessArea/>
         <Products/>
         <Footer />
        </>
    );
};

export default Home;