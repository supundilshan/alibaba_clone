import React from 'react';
import SearchBar from '../SearchBar';
import Buttons from './Buttons';
import HeaderLogo from './HeaderLogo';
import SearchBarMain from './SearchBarMain';
import './STYLES/HeaderStyles.css';

const Header = () => {
    return (
        <div className='row header-container'>
            <div className="button-container">
                <Buttons/>
            </div>
            <div className="header-middle col-md-12">
                <HeaderLogo/>
                <SearchBar/>
                {/* <SearchBarMain/> */}
            </div>
            <div className="heder-lower col-md-12 ">
                ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
            </div>
        </div>
    );
};

export default Header;