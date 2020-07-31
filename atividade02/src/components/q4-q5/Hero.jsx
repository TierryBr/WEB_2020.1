import React from 'react';

import './styles.css'

function Hero(props) {
    return (
        <div className="containers">
            <div className="container">
                <h1>{props.name} da arena {props.arena}</h1>
                <div className="photo">
                    <img src={process.env.REACT_APP_IMAGE1} alt="baki" style={{ width: 200, height: 200 }} />

                </div>
            </div>
        </div>
    );
}

export default Hero;