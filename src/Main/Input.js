import React, { Component } from 'react'

class Input extends Component{
    constructor() {
        super()
    }
    render() {
        return(
            <div id="Input">
                <div id="a-and-b">(a + b)</div>
                <input
                    id="powerInput"
                    type="number" 
                    placeholder="Type the remarkable identity\'s degree you want" 
                />
                <button id="submit" onClick={this.props.handleInputClick}>Render</button>
            </div>
        )
    }
}

export default Input