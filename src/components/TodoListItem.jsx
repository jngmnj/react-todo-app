import React from 'react'
import {IoMdCheckboxOutline,IoMdRemoveCircleOutline} from "react-icons/io";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import "./TodoListItem.scss";

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { text, checked, id } = todo;
  return (
    <div className="todolist_item">
      <div className={`checkbox ${checked ? "checked" : ""}`} onClick={() => onToggle(id)}>
        {checked ? <IoMdCheckboxOutline /> : <MdOutlineCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <IoMdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem