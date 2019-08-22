import React, { Component } from 'react'
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

export class Todos extends Component {
    render() {
        return this.props.todos.map((todo) => {
            return (<TodoItem
                key = { todo.id } 
                todo = { todo }
                markComplete = { this.props.markComplete }
                delTodos = { this.props.delTodos }
                >
            </TodoItem>);
        });
    }
}

Todos.prototypes =  {
    todos: PropTypes.array.isRequired
}

export default Todos
