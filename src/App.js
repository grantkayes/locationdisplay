import React, { Component } from 'react'
 import Locations from './components/Locations'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       locations: [], //locations will be an array of location components
    }
  }

  render() {

    const addLocation = () => {
      console.log(this.state.locations)
    }

    return (
      <div>
        <h1> Select Locations </h1>
        <button> Cancel </button> 
        <button onClick={addLocation}> Add </button>
        <Locations/>
      </div>
    )
  }
}

export default App
