import React from 'react';
import './STYLES/ButtonsStyles.css'

const Buttons = () => {
    return (
        <div className='btn-container'>
            <a className='product-link' href="">Products</a>
            <a className='manu-link' href="">Manufacturers</a>
        </div>
    );
};

export default Buttons;