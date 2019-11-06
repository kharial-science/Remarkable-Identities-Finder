import React, { Component } from 'react'

class Submit extends Component {
    constructor() {
        super()
    }

    render() {
        return(
            <button id="submit" onClick={this.props.inputOnClick}>Render</button>
        )
    }
}

export default Submit