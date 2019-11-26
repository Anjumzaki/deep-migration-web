import React, { useState } from 'react';
import './Section.css'

const Sections1 = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="sec1">
            <h2 className="sec1Heading">
                Deep-Wallet
     </h2>
            <p className="sec1Desc">
                Deep-wallet is an android application where users can add tokens based on ERC-20 only. Users can send and receive supported ERC-20 from Deep-wallet. We will be releasing major updates and new features to complete the other version functionalities.
     </p>
            <p className="sec1Desc">
                The version-1 includes the following features:-
     </p>
        </div>
    );
}

export default Sections1;