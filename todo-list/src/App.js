import React, { Component } from 'react';
import TodoListTemplate from './Components/TodoListTemplate.js';
import Form from './Components/Form.js';
import TodoItemList from './Components/TodoItemList.js';
import Palette from './Components/Palette.js';

const colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];

class App extends Component {
  id = 3;

  state = {
    color: '#343a40',
    input: '',
    todos: [
      { id: 0, text: '리액트 소개', checked: false },
      { id: 1, text: 'JSX 소개', checked: true },
      { id: 2, text: '라이플 사이클', checked: false }
    ]
  }

  handleSelectedColor = (color) => {
    this.setState({
      color
    })
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value //input에 입력되는 값
    });
  }

  handleCreate = () => {
    const { input, todos, color } = this.state;
    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false,
        color
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
    const { color, input, todos } = this.state;
    const {
      handleSelectedColor,
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove
    } = this;

    return (
      <TodoListTemplate palette={<Palette colors={colors} selected={color} onSelect={handleSelectedColor}></Palette>} 
                        form={<Form value={input} onChange={handleChange} onCreate={handleCreate} onKeyPress={handleKeyPress} color={color}></Form>}>
        <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}></TodoItemList>
      </TodoListTemplate>
    );
  }
}

export default App;
