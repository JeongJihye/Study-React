import React, { Component } from 'react';

class Counter extends Component {
    //state : 동적인 데이터 취급
    state = {
        number: 0
    }

    handleIncreate = () => {
        //setState : state에 있는 값을 변경하기 위해 무조건 호출
        //호출 후 컴포넌트가 리렌더링 됨
        this.setState(
            //{
            //number: this.state.number + 1
            
            //(state) => ({
            //    number: state.number
            //})

            //비구조화 할당
            ({ number }) => ({
                number: number + 1
            })
        //}
        );
    }

    handleDecreate = () => {
        const { number } = this.state;
        this.setState({
            number: number - 1
        })

        //this.setState({
        //    number: this.state.number - 1
        //});
    }

    render() {
        return (
            <div>
                <h1>카운터</h1>
                <div>값 : {this.state.number}</div>
                <button onClick={this.handleIncreate}>+</button>
                <button onClick={this.handleDecreate}>-</button>
            </div>
        );
    }
}

export default Counter;