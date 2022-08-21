import React from 'react';
import image from './Alibaba.png';
import './STYLES/HeaderLogoStyles.css';

const HeaderLogo = () => {
    return (
        <div>
            <a href="/"> 
                <img src={image} alt="Alibaba Logo" />
            </a>
        </div>
    );
};

export default HeaderLogo;