import React from 'react';
import './STYLES/NavBarStyles.css'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

const NavBar = () => {
    return (
        <div>
            <nav className="top-nav" id="Top-nav">
                {/* <div className='nav-btn'>
                    <button class="navbar-toggler" type="button">
                        <i className="fa fa-bars" />
                        <p>Menue</p>
                    </button>
                </div> */}

                <div className="navbar-list">
                    <div className="navitem link-container">
                        <a className="navlink link-item" href="#">
                            Ready to Ship
                        </a>
                    </div>
                    <div className="navitem link-container">
                        <a className="navlink link-item" href="#">
                            Personal Protective E...
                        </a>
                    </div>
                    <div className="navitem link-container">
                        <a className="navlink link-item" href="#">
                            Trade Shows
                        </a>
                    </div>
                    <div className="navitem link-container arrow-top-container">
                        <a className="navlink link-item" href="#">
                            Buyer Central
                        </a>
                        <div class="nav-arrow-container">
                            <div class="arrows">
                                <div class="downarrow">
                                    <KeyboardArrowDownOutlinedIcon />
                                </div>
                                <div class="uparrow">
                                    <KeyboardArrowUpOutlinedIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="navitem link-container arrow-top-container">
                        <a className="navlink link-item" href="#">
                            Cell on Alibaba.com
                        </a>
                        <div class="nav-arrow-container">
                            <div class="arrows">
                                <div class="downarrow">
                                    <KeyboardArrowDownOutlinedIcon />
                                </div>
                                <div class="uparrow">
                                    <KeyboardArrowUpOutlinedIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="navitem link-container arrow-top-container">
                        <a className="navlink link-item" href="#">
                            Help
                        </a>
                        <div class="nav-arrow-container">
                            <div class="arrows">
                                <div class="downarrow">
                                    <KeyboardArrowDownOutlinedIcon />
                                </div>
                                <div class="uparrow">
                                    <KeyboardArrowUpOutlinedIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default NavBar;