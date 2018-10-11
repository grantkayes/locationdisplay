import React from 'react';
import Location from './Location'

const Locations = (props) => {
    const data = require('../locations.json')
    const states = require('../states.json')
    
    return(
        <div>
            {states.map(state => {
                let stateArray = []
                data.forEach((data) => {
                    if (data.state === state.abbreviation) {
                        stateArray.push(<Location 
                                            address={data.address}
                                            state={data.state}
                                            city={data.city}
                                        />)
                    }
                })
                return (<div> 
                            <h1> {state.name} </h1>
                            <div>
                                {stateArray.map( location =>
                                    location
                                )}
                            </div>
                        </div>)
            })}
        </div>
    )
}

export default Locations