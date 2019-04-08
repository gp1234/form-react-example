import React from 'react';
import './Menu.css'
import Button from '../UI/Button'

const menu = (props) => {
    let links = props.sublinks.map(link => {
        return (
            <li>{link.toUpperCase()}</li>
        );
    })
    return (
        <div className="menu-container">
            <ul className="menu">
                {links}
                <li><Button color="btn-blue">{props.button.toUpperCase()}</Button></li>
            </ul>
        </div>
    )
}

export default menu;