import React from 'react';

function Pai(props) {
    return (
        <div>
            <p><strong>Nome:</strong> {props.name}</p>
            <p><strong>Curso:</strong> {props.course}</p>
            <p><strong>Cidade:</strong> {props.city}</p>
        </div>
    );
}

export default Pai;