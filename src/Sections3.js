import React, { useState } from 'react';
import './Section.css'

const Sections3 = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="sec1">
            <h2 className="sec3Heading">
                Deep Token Migration
     </h2>
            <p className="sec1Desc">
                Migration in <a href="https://www.deepcloudai.com">DeepCloud AI</a>  refers to the exchange of one cryptocurrency for another one. It's not like selling one token and purchasing a different one. It's the replacement of token from one contract to another. (1:1) <br />
                We are enabling Deep Token holders to <b>swap</b>  their tokens for the <b>“New DEEP Tokens”</b> . Once the user submits their tokens on the provided address, it will be verified, and then the exact no. of tokens will be rewarded to the user’s wallet. <br />
                This is an important step as it will support a scalable and secure blockchain essential for our ecosystem.
     </p>
     <div className="transLogoWrap">
     <img className="transLogo" src={require('./assets/transparent1.png')}/>
     </div>
        </div>
    );
}
export default Sections3;