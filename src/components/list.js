import React, { Component } from 'react'

export default class list extends Component {
    render() {
        let {list} = this.props
        return (
            <div>
                <ul>
                    {
                        list.map((item,index) => {
                        return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
