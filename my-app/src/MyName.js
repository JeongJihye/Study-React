import React from 'react';

//클래스형 컴포넌트
//class MyName extends Component {

//함수형 컴포넌트
const MyName = ({ name }) => {
    //방법1) props가 빠졌을 때 기본값 설정
    //static defaultProps = {
    //    name: '기본이름'
    //}
    //render() {
        return (
            <div>
                {/* 안녕하세요! 제 이름은 <b>{this.props.name}</b> 입니다. */}
                안녕하세요! 제 이름은 <b>{name}</b> 입니다.
            </div>
        );
    //}
};

//방법2) props가 빠졌을 때 기본값 설정
MyName.defaultProps = {
    name: '기본이름'
}

export default MyName;