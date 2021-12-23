import React from 'react';
import Services from '../Services';
import Navber from '../../../Share/Navber/Navber';
import Footer from '../../../Share/Footer/Footer';
import Bg23 from '../../../Share/PageTitleArea/Bg23';

import '../../../Sass/Styled-Sass/bg24.scss';
import '../../../Sass/Styled-Sass/FeatureArea.scss';
import '../../../Sass/Styled-Sass/ProcessArea.scss';
import '../../../Sass/Styled-Sass/Footer.scss';
import '../../../Sass/Styled-Sass/service.scss';

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