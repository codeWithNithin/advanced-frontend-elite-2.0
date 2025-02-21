import { useCallback } from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, onDelete }) => {
  console.log('todolist props', todos);

  function handleDelete(value) {
    onDelete?.(value);
  }

  const memoDeleteTodoCallback = useCallback(handleDelete, [onDelete]);

  return (
    <div className="todo-list">
      {todos?.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.value}
          onDelete={memoDeleteTodoCallback}
        />
      ))}
    </div>
  );
};

export default TodoList;
