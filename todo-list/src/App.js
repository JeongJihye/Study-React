import React, { Component } from 'react';
import TodoListTempleta from './Components/TodoListTemplate.js';
import Form from './Components/Form.js';
import TodoItemList from './Components/TodoItemList.js';

class App extends Component {
  render() {
    return (
      <TodoListTempleta form={<Form></Form>}>
        <TodoItemList></TodoItemList>
      </TodoListTempleta>
    );
  }
}

export default App;
