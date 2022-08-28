import React from 'react';
import './STYLES/CategoriesMenuStyles.css'
import ListIcon from '@mui/icons-material/List';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

const CategoriesMenu = () => {
    return (

        <div className='Categories-main-container arrow-top-container'>
            <div className='listicon'> <ListIcon /> </div>
            <div className='caregories'>
                <a className="navlink" href="#">
                    Categories
                </a>
            </div>
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

export default CategoriesMenu;