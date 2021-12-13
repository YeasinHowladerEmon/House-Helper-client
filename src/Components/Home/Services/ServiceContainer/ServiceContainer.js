import React from 'react';
import Services from '../Services';
import Navber from '../../../Share/Navber/Navber';
import Footer from '../../../Share/Footer/Footer';
import Bg23 from '../../../Share/PageTitleArea/Bg23';

const ServiceContainer = () => {
    return (
        <>
            <Navber />
            <Bg23 />
            <div className="ptb-100">
                <Services />
            </div>
            <Footer />
        </>
    );
};

export default ServiceContainer;