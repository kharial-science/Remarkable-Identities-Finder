import React, { Component } from 'react';
import Input from './Components/Input.js'
import Display from  './Components/Display.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      degree:0
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    }
  

    
  
  handleInputChange(event) {
    
    
    this.setState({
      number: event.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <Input handleInputChange={this.handleInputChange}/>
        <Display number={this.state.number} />
      </div>
      );
    }
  }
export default App;
