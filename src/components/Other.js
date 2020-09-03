import React, { Component } from 'react'
import One from "./One"
import Two from "./Two"
export default class Other extends Component {
    changeColor = ()=>{
        // 需要调用Two的changeColor
        this.two.changeColor()
    }

    render() {
        return (
            <div>
                <One changeColor={this.changeColor}></One>
                <Two ref={el=>this.two=el}></Two>
            </div>
        )
    }
}
