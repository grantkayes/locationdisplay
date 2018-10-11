import React, { Component } from 'react'
import Locations from './components/Locations'
import FlatButton from '@material-ui/core/Button'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       allChecked: false,
    }
  }

  render() {

    const deselectAll = () => {
      this.setState({allChecked: false})
      console.log(this.state.allChecked)
    }

    const selectAll = () => {
      this.setState({allChecked: true})
      console.log(this.state.allChecked)
    }

    return (
      <div>
        <h1> Select Locations </h1>
        <FlatButton> Cancel </FlatButton>
        <FlatButton> Add </FlatButton>
        <FlatButton onClick={deselectAll}> Deselect All </FlatButton>
        <FlatButton onClick={selectAll}> Select All </FlatButton>
        <Locations allChecked={this.state.allChecked}/>
      </div>
    )
  }
}

export default App
