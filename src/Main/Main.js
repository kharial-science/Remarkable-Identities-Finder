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
    }

    render() {
        return (
            <div id="Main">
                <Input handleInputChange={this.handleInputChange} inputOnClick={this.inputOnClick} />
                <Display power={this.state.power} />
            </div>
        )
    }
}

export default Main