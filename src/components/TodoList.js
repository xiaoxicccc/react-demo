import React, { Component } from 'react'
import axios from "axios"
export default class TodoList extends Component {
    state = {
        list:[],
        name:"",
        age:""
    }

    //代表组件挂载结束，可以在这个钩子函数里面进行异步操作
    componentDidMount(){
        this.find()
    }
    // find = ()=>{
    //     axios.get("http://localhost:4000/list").then(res=>{
    //         //更改组件自身状态
    //         this.setState({
    //             list:res.data
    //         })
    //     })
    // }
    find = () => {
        axios.get('http://localhost:4000/list').then(res=>{
            this.setState({
                list: res.data
            })
        })
    }

    //添加操作
    add = ()=>{
        // console.log(this.state.username,this.state.age)
        axios.post("http://localhost:4000/list",{
            name:this.state.name,
            age:this.state.age
        }).then(res=>{
            // console.log("添加数据成功了")
            this.find()
            // this.Input.value = ''
            this.setState({
                name: '',
                age:''
            })

        })
    }
    delete = (id) => {
        axios.delete('http://localhost:4000/list/'+id ).then(res => {
            this.find()
        })
    }

    update = (item) => {
        var newdata = prompt('请输入要修改的内容。。。',item.name+','+item.age)
        var arr=newdata.split(',')
        axios.patch('http://localhost:4000/list/'+item.id, {
            name:arr[0],
            age:arr[1]
        }).then(res => {
            this.find()
        })
    }

    blurFind = () => {
        axios.get('http://localhost:4000/list?name_like='+this.state.name).then(res=>{
            // this.find()
            this.setState({
                list:res.data
            })
        })
    }

    input = e=>{
        this.setState({
            [e.target.id]:e.target.value,
        })
    }

    render() {
        let {name,list,age} = this.state;
        return (
            <div>
                <input id="name" value={name} onChange={this.input} type="text" placeholder="请输入用户名" />
                <input id="age" value={age} onChange={this.input} type="text" placeholder="请输入年龄" />
                <button onClick={this.add}>添加</button>
                <button onClick={this.blurFind}>查询</button>
                <button onClick={()=> this.find()}>返回</button>
                <ul>
                    {
                        list.map((item,index)=>{
                            return (
                                <li key={index}>
                                {item.name}
                                {item.age}
                                
                                <button onClick={this.delete.bind(this,item.id)}>删除</button>
                                <button onClick={this.update.bind(this,item)}>返回</button>
                            </li>
                            )
                               
                        })
                    }
                </ul>
            </div>
        )
    }
}
