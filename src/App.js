import React from 'react';
// import Todos from './components/Todos'
// import Other from './components/Other'
import TodoList from './components/TodoList'
class App extends React.Component{
  render () {
    return (
      <div>
        {/* <Todos/>
        <Other/> */}
        <TodoList/>
      </div>
    )
  }
}

export default App;
