import React from 'react';
import './TodoListTemplate.css';

//함수형 콤포넌트
//단순히 파라미터로 props를 전달하면서 view 렌더링 할 때 사용
//속도가 빠름
const TodoListTemplate = ({palette, form, children}) => {
    return(
        <main className="todo-list-template">
            <div className="title">
                오늘 할 일
            </div>
            <section className="palette-wrapper">
                {palette}
            </section>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="todos-wrapper">
                {children}
            </section>
        </main>
    )
}

export default TodoListTemplate;