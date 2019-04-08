import React from 'react';
import Logo from '../Logo/Logo'
import Menu from '../Menu/Menu'
import './Toolbar.css';


const toolbar = () => {
    const subMenu = [
        "services",
        "about",
        "careers",
        "contact"
    ];
    return (
        <header className="header">
            <Logo />    
            <Menu sublinks={subMenu} button={"support"}/>
        </header>
    );
} 

export default toolbar;