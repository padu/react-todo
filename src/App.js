import React from 'react';
import ToDos from './components/Todos';
import Header from './components/header/Header';
import AddTodo from './components/AddTodo';

import './App.css';

class App extends React.Component {
  state = {
    todos: [{
        id: 1,
        title: "Take out the trash",
        completed: false
      }, {
        id: 2,
        title: "Lunch with wife",
        completed: true
      }, {
        id: 3,
        title: "Meeting with boss",
        completed: false
      }]
  };

  // toggle complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if(todo.id === id) {
          todo.completed = ! todo.completed;
        }
        return todo;
      })
    });
  }

  // delete todos
  delTodos = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)]
    });
  }

  render () {
    return (
      <div className="App">
        <div className='container'>
          <Header/>
          <AddTodo/>
          <ToDos
            todos = { this.state.todos } 
            markComplete = { this.markComplete }
            delTodos = { this.delTodos }
            >
          </ToDos>
        </div>
      </div>);
  };
}

export default App;
