import React, { Component } from 'react'

import './App.css'

import Main from './Main/Main'

let degree = 0
class App extends Component {
  constructor() {
    super()
    }
  
  render() {

    return (
      <div className="App">
        {/* <div class="description">
          <h1>Remarkable Identities Finder</h1>
          <p>Kharoh Family Science prototype to calculate the remarkable identities using Pascal's triangle</p>
        </div> */}
        <Main />
      </div>
      )
    }

  }
export default App;
