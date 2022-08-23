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

const Header = () => {
    return (
        <div className='row header-container'>
            <div className="button-container">
                <Buttons/>
            </div>
            <div className="header-middle">
                <HeaderLogo/>
                <SearchBar/>

                <SignLoginBtn/>
                <Messages/>
                <Orders/>
                <Cart/>
            </div>
            <div className="heder-lower col-md-12 ">
                <CategoriesMenu/>
            </div>
        </div>
    );
};

export default Header;