import React, { Component } from 'react'

class Display extends Component{
    constructor() {
        super()
    }

    render() {
        const power = this.props.power || 0

        // Handling special cases
        if (power === 0) return <div className='Display'><p>1</p></div>
        if (power === 1) return <div className='Display'><p>a + b</p></div>

        // Defining the triangle
        const triangle = [[]]

        // Very first row generation
        triangle[0] = new Array(2*power).fill(0)
        triangle[0].splice(power, 0, 1)
        
        // Generating all the other rows
        for (let i = 1; i <= power; i++) {
            triangle.push([])

            for (let j = 0; j < 2 * power; j++) {
                triangle[i].push(triangle[i-1][j - 1] + triangle[i-1][j + 1])
            }

            triangle[i].push(0)

            if (i !== power) {
                triangle[i][0] = 0
            } else {
                triangle[i][0] = 1
            }
        }
        
        // Fixing last row's last number
        triangle[triangle.length - 1].pop()
        triangle[triangle.length - 1].push(1)

        // Using the last pascal's layer to write down the remarkable identity
        let pascalLayer = triangle[triangle.length-1]
        let developpedID = []

        pascalLayer = pascalLayer.filter(coef => coef > 0)

        for (let i = 0; i <= power; i++) {
            const coef = <span className="coefficient"> { pascalLayer[i] } </span> // The coef before every block
            const a = <span className="a"> a { power - i > 1 ? <sup> { power - i } </sup> : null } </span> // a with its exponent
            const b = <span className="b"> b { i > 1 ? <sup> { i } </sup> : null } </span> // b with its exponent
            let block = <span className="block"> { pascalLayer[i] !== 1 ? coef : null } { power - i > 0 ? a : null } { i > 0 ? b : null } </span> // Creating the full block
            developpedID.push(block)
        }
        
        developpedID = developpedID.reduce((prev, curr) => [prev, <span className="+"> + </span>, curr]) // Adding + between blocks

        return (
            <div id="Display">
                <p> { developpedID } </p>
            </div>
        )
    }
}

export default Display
