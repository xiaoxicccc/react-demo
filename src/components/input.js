import React, { Component } from 'react'

export default class Input extends Component {
    
    handleKeyUp = e =>{
        if(e.keyCode === 13){
            //需要将父组件的list后面追加e.target.value
            this.props.add(e.target.value)
            e.target.value = ""
        }
    }
    render() {
        return (
            <input onKeyUp={this.handleKeyUp}/>
        )
    }
}
