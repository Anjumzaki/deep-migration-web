import React, { useState } from 'react';
import './Section.css'

const Sections2 = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="sec2">
            <img src={require('./assets/Group11.png')}></img>
            <p className="sec2Desc">Already have an Account <a href="/login">Sign In</a> or <a href="/Signup">Create a new Account</a></p>
        </div>
    );
}

export default Sections2;