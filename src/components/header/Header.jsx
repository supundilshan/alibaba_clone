import React from 'react';
import Buttons from './Buttons';
import './STYLES/HeaderStyles.css';

const Header = () => {
    return (
        <div className='row header-container'>
            <div className="button-container">
                <Buttons/>
            </div>
            <div className="header-middle col-md-12">
                sss
            </div>
            <div className="heder-lower col-md-12 ">
                sss
            </div>
        </div>
    );
};

export default Header;