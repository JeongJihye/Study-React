import React, { Component } from 'react';

class App extends Component {
    id = 2

    static defaultProps = {
      age: '27'
    }

    constructor(props) {
        super(props);

        this.state = {
            header: 'hader initial',
            content: 'content initial',
            information: [  
              {
                  id: 0,
                  name: '홍길동',
                  age: '27'
              },
              {
                  id: 1,
                  name: '김영희',
                  age : '28'
              }
            ]            
        };

        this._handleCreate = this._handleCreate.bind(this);
        this._handleDelete = this._handleDelete.bind(this);
        this._handleUpdate = this._handleUpdate.bind(this);
    }

    
    _updateHeader = () => {
        this.setState({
            header: 'header update'
        });
    }

    _handleCreate = () => {
      const { information } = this.state;
      this.setState({
        information: information.concat({id:this.id++, name: '추가', age: '0'})
      })
    }

    _handleDelete = () => {
      const { information } = this.state;
      this.setState({
        // id가 3인 원소만 놔두고 나머지는 삭제
        information: information.filter(info => info.id === 3)
      })
    }

    _handleUpdate = () => {
      const { information } = this.state;
      this.setState({
        information: information.map(
          info => info.id === 0
            ? info = {id: 0, name: '수정', age: '99'}
            : info
        )
      })
    }

    render() {
      const { information } = this.state;
      return (
          <div>
              <h1>{ this.state.header } </h1>
              <h2>{ this.state.content } </h2>
              <button onClick={ this._updateHeader }>update</button>

              <h1> {this.props.name} </h1>
              <h1> {this.props.age} </h1>

              {JSON.stringify(information)}
              <button onClick={ this._handleCreate }>추가</button>
              <button onClick={ this._handleDelete }>삭제</button>
              <button onClick={ this._handleUpdate }>수정</button>
          </div>
      )
    }
}

export default App;