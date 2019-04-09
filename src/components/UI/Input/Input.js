import React from  'react';
import './Input.css';

const input = (props) => {
    let inputElement = null;
    let inputStyles = ["input"];
    let labelStyles = ["label"];

    
    inputStyles.push(props.style);
    console.log(props.elementType)
    switch(props.elementType)
    {
        case 'input' : 
            inputElement = (
            <input 
            {...props.elementConfig}
            onChange={props.change}
            className={inputStyles.join(' ')}
            ></input>)
        break;


    }

    return (
        <div className="InputContainer">
            <span className={(props.elementConfig.required ? 'required' : '')}></span>
            <label className={labelStyles.join(' ')}>{props.title.toUpperCase()}</label>
            {inputElement}
        </div>
    );
}

export default input;