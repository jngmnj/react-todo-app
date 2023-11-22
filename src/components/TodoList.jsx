import React, { useCallback } from 'react'
import TodoListItem from './TodoListItem'
import "./TodoList.scss"
import { List } from "react-virtualized";

const TodoList = ({ todos, onRemove, onToggle }) => {
  const rowRenderer = useCallback(({ index, key, style }) => {
    const todo = todos[index];
    return (
      <TodoListItem 
        todo={todo}
        key={key}
        onRemove={onRemove}
        onToggle={onToggle}
        style={style}
      />
    )
  }, [onRemove, onToggle, todos]);
  return (
    // <div className="todolist">
    //   {todos.map((todo) => (
    //     <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} />
    //   ))}
    // </div>
    <List
      className="todolist"
      width={512} // 전체크기
      height={513}
      rowCount={todos.length}
      rowHeight={57}
      rowRenderer={rowRenderer}
      list={todos}
      style={{ outline: 'none' }} // List에 기본 적용되어있는 outline제거
    />
  );
};

export default React.memo(TodoList);