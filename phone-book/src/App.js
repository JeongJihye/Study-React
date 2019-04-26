import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm.js';
import PhoneInfoList from './components/PhoneInfoList.js';

class App extends Component {
  id = 2
  state = {
    information : [
      {
        id: 0,
        name: '김민준',
        phone: '000-0000-0000'
      },
      {
        id: 1,
        name: '홍길동',
        phone: '111-1111-1111'
      }
    ]
  }

  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    })
  }

  render() {
    const { information } = this.state;
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate}></PhoneForm>
        <PhoneInfoList data={this.state.information}></PhoneInfoList>
      </div>
    );
  }
}

export default App;
