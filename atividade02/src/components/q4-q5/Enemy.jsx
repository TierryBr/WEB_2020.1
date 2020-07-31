import React from 'react';

import './styles.css'

function Enemy(props) {
    return (
        <div className="containers">
            <div className="container">
                <h1>{props.name} da arena {props.arena}</h1>
                <div className="photo">
                    <img src={process.env.REACT_APP_IMAGE2} alt="yujiro" />
                </div>
            </div>
        </div>
    );
}

export default Enemy;