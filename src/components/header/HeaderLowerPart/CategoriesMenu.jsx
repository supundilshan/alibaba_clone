import React from 'react';
import './STYLES/CategoriesMenuStyles.css'
import ListIcon from '@mui/icons-material/List';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

const CategoriesMenu = () => {
    return (
        <div className='Categories-main-container'>
            <div> <ListIcon/> </div>
            <div className='caregories'> <p>Caregories</p> </div>

            <div class="nav-arrow-container">
                <div class="arrows">
                    <div class="downarrow">
                        <KeyboardArrowDownOutlinedIcon/>
                    </div>
                    <div class="uparrow">
                        <KeyboardArrowUpOutlinedIcon/>
                    </div>
                </div>
            </div>

            
            {/* <div className='arrow'> AAAAA </div> */}
                
        </div>
    );
};

export default CategoriesMenu;