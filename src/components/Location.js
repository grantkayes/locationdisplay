import React from 'react';

const Location = (props) => {

    return(
        <div>
            <h1> {props.address} </h1>
            <p> {`${props.city}, ${props.state}`} </p>
            <input type="checkbox"/>
        </div>
    )
}

export default Location