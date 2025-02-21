import { memo } from 'react';

const TodoListItem = ({ todo, onDelete }) => {
  return (
    <div>
      <li>
        {todo?.value}
        <button onClick={() => onDelete(todo.value)}>X</button>
      </li>
    </div>
  );
};

export default memo(TodoListItem);
