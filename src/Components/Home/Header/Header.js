import React from 'react';
import Navber from '../../Share/Navber/Navber';
import FeatureArea from '../Feature-Area/FeatureArea';
import HeaderMain from '../HeaderMain/HeaderMain';

const Header = () => {
    return (
        <>
            <Navber />
            <HeaderMain />
            <FeatureArea />
        </>
    );
};

export default Header;