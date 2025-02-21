import { useCallback, useEffect, useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  function onSubmit(value) {
    if (value) {
      setTodos([...todos, { value }]);
    }
  }

  function handleDelete(value) {
    const newTodos = todos.filter((todo) => todo.value !== value);
    setTodos(newTodos);
  }

  const memoDeleteTodoCallback = useCallback(handleDelete, [todos]);

  return (
    <>
      <TodoInput onSubmit={onSubmit} />
      <TodoList todos={todos} onDelete={memoDeleteTodoCallback} />
    </>
  );
}

export default App;
