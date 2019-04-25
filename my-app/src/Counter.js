import React, { Component } from 'react';

class Counter extends Component {
    //state : 동적인 데이터 취급
    state = {
        number: 0
    }

    //컴포넌트 생성자 : 컴포넌트가 새로 만들어질 때마다 호출
    constructor(props) {
        super(props);
        console.log('constructor');
    }

    //컴포넌트가 화면에 나가기 직전에 호출
    componentWillMount() {
        console.log('componentWillMount (deprecated)');    
    }

    //컴포넌트가 화면에 나타났을 때 호출
    //외부 라이브러리 연동: D3, masonry, etc
    //컴포넌트에서 필요한 데이터 요청: Ajax, GraphQL, etc
    //DOM 에 관련된 작업: 스크롤 설정, 크기 읽어오기 등
    componentDidMount() {
        console.log('componentDidMount');
    }

    //컴포넌트를 최적화하는 작업에서 유용하게 사용
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        if (nextState.number % 5 === 0) return false;
        return true;
    }

    //shouldComponentUpdate에서 true를 반환했을때만 호출
    //주로 애니메이션 효과를 초기화 하거나 이벤트 리스너를 없애는 작업
    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate');
    }

    //컴포넌트에서 render()를 호출하고 난 다음에 발생
    componentDidUpdate(prevProps, PrevState) {
        console.log('componentDidUpdate');
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
        console.log('render');
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