import React from 'react';
import './style.css';

export function Header() {
    return (
        <div className="header_Container">
            <div className="logoHeader">
                <img src="https://user-images.githubusercontent.com/59892368/211217236-86d5d9d0-8991-4a65-a29c-60bd65621ced.svg" />
            </div>
            <div className="navBar">
                <div className='nav_Options'>
                    <a>HOME</a> 
                    <a>DOCUMENTATION</a>
                </div>
                <div className="nav_Github">
                    <a>Github</a>
                </div>
            </div>

        </div>
    )
}