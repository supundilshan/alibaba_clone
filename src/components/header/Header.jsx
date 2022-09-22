import React from 'react';
import SearchBar from './HeaderMidPart/SearchBar';
import Buttons from './HeaderTopPart/Buttons';
import Cart from './HeaderMidPart/Cart';
import HeaderLogo from './HeaderMidPart/HeaderLogo';
import Messages from './HeaderMidPart/Messages';
import Orders from './HeaderMidPart/Orders';
import SignLoginBtn from './HeaderMidPart/SignLoginBtn';
// import SignLoginPopUp from './HeaderMidPart/SignLoginPopUp';
import CategoriesMenu from './HeaderLowerPart/CategoriesMenu';
import NavBar from './HeaderLowerPart/NavBar';
import GetApp from './HeaderLowerPart/GetApp';
import LanguageSelect from './HeaderLowerPart/LanguageSelect';
import ShipTo from './HeaderLowerPart/ShipTo';

import './STYLES/HeaderStyles.css';
import './STYLES/HeaderCommonStyles.css';

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