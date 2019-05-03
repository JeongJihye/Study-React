import React, { Component } from 'react';
import Todoitem from './TodoItem.js';

class TodoItemList extends Component {
    render() {
        const { todos, onToggle, onRemove } = this.props;

        return (
            <div>
                <Todoitem text="안녕"></Todoitem>
                <Todoitem text="리액트"></Todoitem>
                <Todoitem text="반가워"></Todoitem>
            </div>
        );
    }
}

export default TodoItemList;