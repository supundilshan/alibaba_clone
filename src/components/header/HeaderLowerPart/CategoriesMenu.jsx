import React from 'react';
import './STYLES/CategoriesMenuStyles.css'
import ListIcon from '@mui/icons-material/List';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

const CategoriesMenu = () => {
    return (
        // <div className='Categories-main-container'>
        //     <div> <ListIcon/> </div>
        //     <div className='text'> <p>Caregories</p> </div>
        //     <div className='arrows'>
        //         <div className='uparrow'>  </div>
        //         <div className='downarrow'>  </div>
        //     </div>
            
        //     {/* <div className='arrow'> AAAAA </div> */}
                
        // </div>
        <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <KeyboardArrowDownOutlinedIcon/>
          </div>
          <div class="flip-card-back">
            <KeyboardArrowUpOutlinedIcon/>
          </div>
        </div>
      </div>
    );
};

export default CategoriesMenu;