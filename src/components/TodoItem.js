import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background:'#f4f4f4',
            padding : '10px',
            borderBottom : '1px #ccc dotted',
            textDecoration : this.props.todo.completed ? 'line-through' : 'none'
        }
    };

    markComplete = (id) => {
        console.log('in todo item id : ', id);
    }

    render() {
        let { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <input
                    type = "checkbox"
                    onChange = { this.props.markComplete.bind(this, id) } />
                <span  style = {{padding : '0px', margin: '0px'}}>
                    { title }
                </span>
                <button
                    style = { btnStyle }
                    onClick = { this.props.delTodos.bind(this, id) }>
                    X
                </button>
            </div>
        );
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
};

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    float: 'right'
}

export default TodoItem
