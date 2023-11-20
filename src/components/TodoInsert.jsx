import React, { useCallback, useState } from 'react'
import "./TodoInsert.scss";
import { IoMdAdd } from "react-icons/io";

const TodoInsert = ({ onInsert}) => {
  const [value, setValue] = useState("");

  const onChange = useCallback(
    (e) => {
      setValue(e.target.value);
    },[]
  );
  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue('');

      e.preventDefault();
    },[onInsert, value]
  );
  
  return (
    <form className="form" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="오늘의 할일을 입력하세요!"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <IoMdAdd />
      </button>
    </form>
  );
}

export default TodoInsert