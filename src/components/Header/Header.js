import React from 'react'
import './Header.css';
import icon from './first.svg';

const Header =(props)=>{
    return( 
        <div className="head-container">
        <img src={icon}
        alt="HeaderImage" 
        className="head-img" />
        {/* Implemented new img for learning purpose */}
        {/* <img src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"
        alt="HeaderImage" 
        className="head-img" /> */}

        <h1 className="head-text">{props.headtitle}</h1>
        </div>
    );
}

export default Header;