import React from 'react'
import {IoMdCheckboxOutline,IoMdRemoveCircleOutline} from "react-icons/io";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import "./TodoListItem.scss";

const TodoListItem = ({ todo }) => {
    const { text, checked } = todo;
    console.log(checked);
  return (
    <div className="todolist_item">
      <div className={`checkbox ${checked ? "checked": ""}`}>
        {checked ? (
            <IoMdCheckboxOutline />
        ) : (
            <MdOutlineCheckBoxOutlineBlank />
        )}
        <div className="text">{text}</div>
      </div>
      <div className="remove">
        <IoMdRemoveCircleOutline />
      </div>
    </div>
  );
}

export default TodoListItem