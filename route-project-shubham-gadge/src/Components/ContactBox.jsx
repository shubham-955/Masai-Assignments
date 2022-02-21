import React from 'react';
import '../CSS/ContactBox.css'
import { Instagram, Facebook, KeyboardArrowDown } from '@material-ui/icons';

export const ContactBox = () => {
    return (
        <div className='contactBox'>
            <div className='icons'>
                <Instagram style={{ color: 'black', fontSize: 28 }} className='mobile' />
                <Facebook style={{ color: 'black', fontSize: 28 }} className='mail' />
            </div>
            <div className='currencyDropdown'>
                <p>AUD</p>
                <p>$</p>
                <KeyboardArrowDown style={{ color: 'black', fontSize: 28 }} />
            </div>
        </div>
    );
};