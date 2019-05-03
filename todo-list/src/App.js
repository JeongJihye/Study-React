import React, { Component } from 'react';
import TodoListTempleta from './Components/TodoListTemplate.js';
import Form from './Components/Form.js';
import TodoItemList from './Components/TodoItemList.js';

class App extends Component {
  id = 3;

  state = {
    input: '',
    todos: [
      { id: 0, text: '리액트 소개', checked: false },
      { id: 1, text: 'JSX 소개', checked: true },
      { id: 2, text: '라이플 사이클', checked: false }
    ]
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value //input에 입력되는 값
    });
  }

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    })
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;

    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]; //선택한 객체

    const nextTodos = [...todos];

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  }

  handleRemove = (id) => {
    const { todos } = this.state;

    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  render() {
    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove
    } = this;

    return (
      <TodoListTempleta form={<Form value={input} onChange={handleChange} onCreate={handleCreate} onKeyPress={handleKeyPress}></Form>}>
        <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}></TodoItemList>
      </TodoListTempleta>
    );
  }
}

export default App;
