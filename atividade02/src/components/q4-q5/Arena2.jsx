import React from 'react';

import './styles.css'

function Arena(props) {
    return (
        <div>

            {React.Children.map(props.children, arena => {
                return React.cloneElement(arena, { ...props })
            })}
        </div>
    );
}

export default Arena;

