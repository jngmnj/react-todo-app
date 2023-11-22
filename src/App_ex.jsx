import { useCallback, useRef, useState } from 'react'
import TodoTemplate from './components/TodoTemplate'
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList'

const createBulkTodos = () => {
  const array = [];
  for(let i = 1; i<= 2500; i++) {
    array.push({
      id: i,
      text: `할일 ${i}`,
      checked: false,
    });
  }
  return array;
}

function App() {
  const [todos, setTodos] = useState(createBulkTodos);

  const nextId = useRef(4);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      // setTodos(todos.concat(todo));
      setTodos(todos => todos.concat(todo)); // 함수형 업데이트
      nextId.current += 1;
    },
    // [todos],
    [], // useState에서 함수형업데이트를 해줬기때문에 빈배열 dependency
  )
  
  const onRemove = useCallback(
    (id) => {
      // setTodos(todos.filter(todo => todo.id !== id));
      setTodos(todos => todos.filter(todo => todo.id !== id));
    },
    [],
  )
  
  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos => 
        todos.map(todo => (
          todo.id === id ? {...todo, checked: !todo.checked } : todo
        ))
      )
    },
    [],
  )
  
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App
