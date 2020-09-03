import React, { Component } from 'react'
import EventHub from "../utils/event-hub"
export default class One extends Component {
    
    color16 = ()=>{
        var r = Math.floor(Math.random()*256);
        var g = Math.floor(Math.random()*256);
        var b = Math.floor(Math.random()*256);
        var color = '#'+r.toString(16)+g.toString(16)+b.toString(16);
        return color;
    }
    handleClick = () => {
        EventHub.trigger('bianse', this.color16())
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>点他</button>                
            </div>
        )
    }
}
