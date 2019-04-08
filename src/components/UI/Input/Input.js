import React from  'react';

const input = (props) => {
    let inputElement = null;

    switch(props.type)
    {
        case 'text' : 
            inputElement = (<input type="text"></input>)
        break;
    }

    return (
        <div>
            <label>{props.title.toUpperCase()}</label>
            {inputElement}
        </div>
    );
}

export default input;