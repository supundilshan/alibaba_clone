import React from 'react';
import './STYLES/ShipToStyles.css';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

import flag from './Flags/SriLanka.png'

const ShipTo = () => {
    return (
        <div className='shipto-container  arrow-top-container'>
            <p className='shipto-title'>Ship to:</p>
            <img src={flag}/>
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
    );
};

export default ShipTo;