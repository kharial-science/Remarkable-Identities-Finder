import React, { Component } from 'react';
import Input from './Components/Input.js'
import Display from  './Components/Display.js'
let degree = 0
class App extends Component {
  constructor() {
    super()
    this.state = {
      number:0
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.inputOnClick = this.inputOnClick.bind(this)
    }
  
  handleInputChange(event){
    degree = event.target.value
  }
  
  inputOnClick(event) { 
    this.setState({
      number: degree
    })
  }
  render() {
    return (
      <div className="App">
        <Input handleInputChange={this.handleInputChange} inputOnClick={this.inputOnClick} />
        <Display number={this.state.number} />
      </div>
      );
    }
  }
export default App;
