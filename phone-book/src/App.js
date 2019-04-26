import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm.js';

class App extends Component {
  handleCreate = (data) => {
    console.log(data);
  }
  
  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate}></PhoneForm>
      </div>
    );
  }
}

export default App;
