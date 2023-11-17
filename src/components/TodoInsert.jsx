import React from 'react'
import "./TodoInsert.scss";
import { IoMdAdd } from "react-icons/io";

const TodoInsert = () => {
  return (
    <form className="form">
      <input type="text" placeholder="오늘의 할일을 입력하세요!" />
      <button type="submit">
        <IoMdAdd />
      </button>
    </form>
  );
}

export default TodoInsert