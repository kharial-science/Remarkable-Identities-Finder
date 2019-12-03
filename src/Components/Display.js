import React, { Component } from 'react'

class Display extends Component{
    constructor() {
        super()
    }

    render() {

        if(this.props.number){
            var triangle=[[]];
            for(var i=0; i<this.props.number; i++){
                triangle[0].push(0);
            };
            triangle[0].push(1);
            for(var i=0; i<this.props.number; i++){
                triangle[0].push(0);
            };
            for(var i=0; i<this.props.number; i++){
                triangle.push([]);
                for(var j=0; j<2*this.props.number; j++){
                    triangle[i+1].push(triangle[i][j-1]+triangle[i][j+1]);
                };
                triangle[i+1].push(0);
                if (i!==this.props.number-1){
                    triangle[i+1][0]=0;
                }else{
                    triangle[i+1][0]=1
                }
            };
            
            triangle[triangle.length-1].pop();
            triangle[triangle.length-1].push(1);

            var pascalLayer= triangle[triangle.length-1];
            var developpedID = [];
            for( var i = 0; i < pascalLayer.length; i++){ 
                if ( pascalLayer[i] === 0) {
                pascalLayer.splice(i, 1); 
                };
            };     
            if (this.props.number===0){
                return "1"
            };
            if (this.props.number===1){
                return "a + b"
            };
            developpedID.push(<span class="expression">a<var><sup>{this.props.number.toString()} + </sup></var></span>);
            for(var i=1;i<this.props.number;i++){
                var aIndex=this.props.number-i;
                var bIndex=i;
                if (bIndex===1 && aIndex===1){
                    developpedID.push(<span class="expression">{pascalLayer[i].toString()}ab</span>);
                }else if (bIndex===1){
                developpedID.push(<span class="expression">{pascalLayer[i].toString()}a<var><sup> {aIndex.toString()}</sup></var>b</span>);
                }else if (aIndex===1){
                    developpedID.push(<span class="expression">{pascalLayer[i].toString()}ab<var><sup>{bIndex.toString()}</sup></var></span>);
                }else if (aIndex!==0 && bIndex!==0 && aIndex!==1 && bIndex!==1){
                    developpedID.push(<span class="expression">{pascalLayer[i].toString()}a<var><sup>{aIndex.toString()}</sup></var>b<var><sup>{bIndex.toString()}</sup></var></span>);
                };
                developpedID.push(<span class="expression"> + </span>);
            }
            developpedID.push(<span class="expression">b<var><sup> + {this.props.number.toString()}</sup></var></span>);
            developpedID = this.props.number == 0 ? "1" : developpedID
        }

        return(
            <div className='Display'>
                <p>
                    {(this.props.number) ? developpedID : "None" }
                </p>
            </div>
        )
    }
}

export default Display