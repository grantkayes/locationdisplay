import React from 'react';
import Location from './Location'

const Locations = (props) => {
    const data = require('../locations.json')
    return(
        <div>
            {data.map(data => <Location 
                                address={data.address} 
                                state={data.state}
                                city={data.city}
                            />)}
        </div>
    )
}

export default Locations