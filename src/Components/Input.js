import React, { Component } from 'react'
import Submit from './Submit.js'

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
            <Submit inputOnClick={this.props.inputOnClick}/>
            </div>
        )
    }
}

export default Input