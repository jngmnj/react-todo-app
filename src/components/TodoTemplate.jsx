import React from 'react'
import "./TodoTemplate.scss";

const TodoTemplate = ({ children }) => {
  return (
    <div className='todo-wrapper'>
        <div className='title'>투두투데이</div>
        <div className='content'>{children}</div>
    </div>
  )
}

export default TodoTemplate