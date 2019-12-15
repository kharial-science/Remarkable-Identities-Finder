import React, { Component } from 'react'

import './Main.css'

import Display from './Display'
import Input from './Input'

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            power: 4,
        }

        this.handleInputClick = this.handleInputClick.bind(this)
    }
    
    handleInputClick (event) {
        const power = parseInt(document.getElementById("powerInput").value, 10)
        if (power) this.setState({ power })
    }

    render() {
        return (
            <div id="Main">
                <Input handleInputClick={this.handleInputClick} />
                <Display power={this.state.power} />
            </div>
        )
    }
}

export default Main