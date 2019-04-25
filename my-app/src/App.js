import React, { Component } from 'react';
import './App.css';
import MyName from './MyName.js';

class App extends Component {
  render() {
    const name = 'react';
    const value = 1;
    //객체 형태로 style 지정
    const style = {
      backgroundColor: 'black',
      padding: '16px',
      color: 'white',
      fontSize: '12px'
    };
    return (
      <div> 
        {/* props, 부모 컴포넌트가 자식 컴포넌트에게 주는 값 */}
        <MyName name="리액트"></MyName>       
        {/* 객체 형태로 style 지정 */}
        <div style={style}>
          hello {name}!
        </div>
        {/* className으로 style 지정 */}
        <div className="App">
          리액트
        </div>
        <div>
          {
            //삼항 연산자
            1 + 1 === 2
              ? (<div>맞아요!</div>)
              : (<div>틀려요!</div>)
          }
        </div>
        <div>
          {
            //AND 연산자
            1 + 1 ===2 && (<div>맞아요!</div>)
          }
        </div>
        <div>
          {
            (function() {
              if (value === 1) return (<div>하나!</div>);
              if (value === 2) return (<div>둘!</div>);
              if (value === 3) return (<div>셋!</div>);
            })()
          }
        </div>
        <div>
          {
            //화살표 함수(익명 함수)
            (()=> {
              if (value === 1) return (<div>하나!</div>);
              if (value === 2) return (<div>둘!</div>);
              if (value === 3) return (<div>셋!</div>);
            })()
          }
        </div>
      </div>
    )
  }
}

export default App;
