import React from 'react';
import Input from '../../components/UI/Input/Input'
import './Form.css';

const form = () => {
    return (
       <div class="cardBox">
            <h1 class="form-h1">Client Information</h1>
            <Input title={"First Name"} type="text"></Input>
       </div>
    );
}

export default form;