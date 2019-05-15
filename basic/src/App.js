import React, { Component } from 'react';

class App extends Component {   
    static defaultProps = {
      age: '27'
    }

    constructor(props) {
        super(props);

        this.state = {
            header: 'hader initial',
            content: 'content initial'
        };
    }

    _updateHeader = () => {
        this.setState({
            header: 'header update'
        });
    }

    render() {
        return (
            <div>
                <h1>{ this.state.header } </h1>
                <h2>{ this.state.content } </h2>
                <button onClick={ this._updateHeader }>update</button>

                <h1> {this.props.name} </h1>
                <h1> {this.props.age} </h1>
            </div>
        )
    }
}

export default App;