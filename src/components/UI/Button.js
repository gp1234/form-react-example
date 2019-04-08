import React from 'react';
import './Button.css'

const button = (props) => {
    let styles = ["btn"];
    (props.color) ? styles.push(props.color) : console.log(".")
    return (
        <>
            <button className={styles.join(' ')}>{props.children}</button>
        </>
    )
}

export default button;