import React from 'react'
import './Header.css';
import icon from './first.svg';



const Header =({headTitle,headerExpanded})=>{
    return( 
        <div className="head-container">
        <img 
        src={icon}
        alt="HeaderImage" 
        className={`head-image ${
                    headerExpanded
                        ? 'head-image-expanded'
                        : 'head-image-contracted'
                }`}
                alt="headerImage"
            />
            <h1
                className={`head-text ${
                    headerExpanded
                        ? 'head-text-expanded'
                        : 'head-text-contracted'
                }`}
            >
                Guess It!
            </h1>
        </div>
    );
};

export default Header;

 {/* Implemented new img for learning purpose */}
        {/* <img src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"
        alt="HeaderImage" 
        className="head-img" /> */}