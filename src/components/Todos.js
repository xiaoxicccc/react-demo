import React, { Component } from 'react'
import List from './list'
import Input from './input'
export default class Todos extends Component {
    state = {
        list: ['a', 'b', 'c']
    }
    add = (str) => {
        this.setState({
            list: [...this.state.list,str]
        })
    }
    render() {
        let { list } = this.state
        return (
            <div>
                <List list={list} />
                <Input add={this.add} />
            </div>
        )
    }
}
