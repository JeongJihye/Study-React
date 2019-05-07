import React, { Component } from 'react';
import TodoItem from './TodoItem.js';

class TodoItemList extends Component {
    //컴포너트가 리렌더링할지 말지 결정
    //조건에 맞을 때만 리렌더링(todos의 값이 바뀔 때만)
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
    }

    render() {
        const { todos, onToggle, onRemove } = this.props;

        const todoList = todos.map(
            ({ id, text, checked, color }) => (
                <TodoItem id={id} text={text} checked={checked} onToggle={onToggle} onRemove={onRemove} key={id} color={color}></TodoItem>
            )
        );

        return (
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoItemList;