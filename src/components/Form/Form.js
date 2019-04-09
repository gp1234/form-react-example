import React from 'react';
import Input from '../../components/UI/Input/Input'
import Button from '../UI/Button'
import './Form.css';

const form = () => {
    return (
       <div class="cardBox">
            <h1 class="form-h1">Client Information</h1>
            <div className="input-inline">
                <Input title={"First Name"} elementType={"input"} elementConfig={{required: "required", type: "text"}}></Input>
                <Input title={"Last Name"} elementType={"input"} elementConfig={{required: "required", type: "text"}}></Input>
            </div>
            <div className="input-big">
                <Input title={"Company Name"}  elementType={"input"} elementConfig={{ type: "text"}}></Input>
            </div>

            <div className="cta">
                <Button color={"btn-green"}>Next Step &rarr;</Button>
            </div>
       </div>
    );
}

export default form;