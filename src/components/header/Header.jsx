import React from 'react';
import SearchBar from './SearchBar';
import Buttons from './Buttons';
import Cart from './Cart';
import HeaderLogo from './HeaderLogo';
import Messages from './Messages';
import Orders from './Orders';
import SignLoginBtn from './SignLoginBtn';
import SignLoginPopUp from './SignLoginPopUp';
import './STYLES/HeaderStyles.css';
import CategoriesMenu from './HeaderLowerPart/CategoriesMenu';
import NavBar from './HeaderLowerPart/NavBar';
import GetApp from './HeaderLowerPart/GetApp';
import LanguageSelect from './HeaderLowerPart/LanguageSelect';
import ShipTo from './HeaderLowerPart/ShipTo';

const Header = () => {
    return (
        <div className='header-container'>
            <div className="button-container">
                <Buttons />
            </div>
            <div className="header-middle">
                <HeaderLogo />
                <SearchBar />

                <SignLoginBtn />
                <Messages />
                <Orders />
                <Cart />
            </div>
            <div className="heder-lower">
                <div> <CategoriesMenu /> </div>
                <div> <NavBar /> </div>
                <div className='header-lower-right'>
                    <div> <GetApp /> </div>
                    <div> <LanguageSelect/></div>
                    <div> <ShipTo/> </div>
                </div>
            </div>
        </div>
    );
};

export default Header;