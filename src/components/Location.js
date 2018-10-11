import React from 'react';
import './Location.css'

const Location = (props) => {
  return (
    <div className='body'>
      <h3> {props.address} </h3>
      <p> {`${props.city}, ${props.state}`} </p>
      {props.allChecked ? <input type="checkbox" checked /> : <input type="checkbox" />}
    </div>
  )
}

export default Location