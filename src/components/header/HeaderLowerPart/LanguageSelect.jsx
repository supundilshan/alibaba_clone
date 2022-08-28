import React from 'react';
import './STYLES/LanguageSelectStyles.css';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

const LanguageSelect = () => {
    return (
        <div className='lang-topic link-container arrow-top-container'>
            <a className='link-item' href="#"> English - LKR</a>
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

export default LanguageSelect;