import React from 'react';

const Location = (props) => {

    

    return(
        <div>
            <h2> {props.address} </h2>
            <p> {`${props.city}, ${props.state}`} </p>
            {props.allChecked ? <input type="checkbox" checked/> : <input type="checkbox"/>}
        </div>
    )
}

export default Location