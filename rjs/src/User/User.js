import React from 'react';
import './User.css';

const user = (props) => {
    return (
        <div className="Person" onClick={props.click}>
            <h1>{props.user.name}</h1>
            <h3>{props.children}</h3>
        </div>
    )
}

export default user;