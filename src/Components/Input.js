import React, { Component } from 'react'

class Input extends Component{
    constructor() {
        super()
    }
    render() {
        return(
            <div className='Input'>
                <input 
                type='number' 
                placeholder="Type the remarkable identity\'s degree you want" 
                class="inputNumber"
                onChange={this.props.handleInputChange} />
            </div>
        )
    }
}

export default Input