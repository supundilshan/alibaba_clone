import React from 'react';
import './STYLES/NavBarStyles.css'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

const NavBar = () => {
    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }
    return (
        <div>
            <nav className="top-nav" id="Top-nav">
                {/* <div>
                    <button class="navbar-toggler" type="button">
                        <i className="fa fa-bars" />
                    </button>
                </div> */}
                <div>
                    <div className="navbar-list">
                        <div className="navitem">
                            <a className="navlink" href="#">
                                Ready to Sip
                            </a>
                        </div>
                        <div className="navitem">
                            <a className="navlink" href="#">
                                Personal Protective E...
                            </a>
                        </div>
                        <div className="navitem">
                            <a className="navlink" href="#">
                                Trade Shows
                            </a>
                        </div>
                        <div className="navitem arrow-top-container">
                            <a className="navlink" href="#">
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
                        <div className="navitem arrow-top-container">
                            <a className="navlink" href="#">
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
                        <div className="navitem arrow-top-container">
                            <a className="navlink" href="#">
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
                </div>

            </nav>

        </div>
    );
};

export default NavBar;