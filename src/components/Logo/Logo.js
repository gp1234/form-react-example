import React from 'react'
import image from '../../assets/images/logo.jpg'
import './Logo.css'

const logo = () => {
    return (
        <div className="logo">
            <img src={image} alt="Logo"/>
        </div>
    )
}

export default logo;