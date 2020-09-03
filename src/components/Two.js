import React, { Component } from 'react'
import EventHub from "../utils/event-hub"
export default class Two extends Component {
    state = {
        color:'red'
    }

    
    // changeColor = ()=>{
    //     this.setState({
    //         color:"yellow"
    //     })
    // }
    componentDidMount () {
        EventHub.on('bianse', color => {
            this.setState({
                color
            })
        })
    }
    render() {
        return (
            <div>
                <span style={{color:this.state.color}}>two</span>
            </div>
        )
    }
}
