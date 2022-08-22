import React from 'react';
import SearchBar from '../SearchBar';
import Buttons from './Buttons';
import HeaderLogo from './HeaderLogo';
import Messages from './Messages';
import Orders from './Orders';
import SearchBarMain from './SearchBarMain';
import SignLoginBtn from './SignLoginBtn';
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
                <SignLoginBtn/>
                <Messages/>
                <Orders/>
            </div>
            <div className="heder-lower col-md-12 ">
                ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
            </div>
        </div>
    );
};

export default Header;