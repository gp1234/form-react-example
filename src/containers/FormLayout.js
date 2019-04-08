import React from 'react';
import Toolbar from '../../src/components/Toolbar/Toolbar'
import Form from '../../src/components/Form/Form'
import './FormLayout.css';

const formLayout = () => {
    return (
        <div className="formLayout">
            <Toolbar />
            <section className="form-content">
                <h1 className="form-line">Dealer Information Sheet</h1>
                <div className="form-tagline">
                    <p>Night of Seas fruitful image that man of beat have freen own it after and shall.</p>
                    
                    <p>Likeness shall which creepeth to heaven living open fruit bring created air</p>
                </div>

                <p className="form-information">*All fields marked with a <span style={ {color : "red" } }> * </span> are required</p>
            </section>
            <section className="form">
                <Form />
            </section>
        </div>
    );
}

export default formLayout;