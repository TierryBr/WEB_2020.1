import React from 'react';


function Hero(props) {
    return (
        <div >
            <h1>{props.name}</h1>
            <img src={props.img} alt="baki" style={{ width: 200, height: 200 }} />
        </div>
    );
}

function Enemy(props) {
    return (
        <div >
            <h1>{props.name}</h1>
            <img src={props.img} alt="yujiro" />
        </div>
    );
}

function Arena() {
    return (
        <div>
            <Hero name="baki" img={process.env.REACT_APP_IMAGE1} />
            <Enemy name="yujiro" img={process.env.REACT_APP_IMAGE2} />
        </div>
    );
}

export default Arena;

