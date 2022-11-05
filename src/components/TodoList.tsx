import { Todo } from '../todo.models';

import './TodoList.css'

interface TodoListProps {
  items: Todo[];
  onDeleteTodo: (id: string) => void;
}

export const TodoList = ({ items, onDeleteTodo }: TodoListProps) => {
  const contentRender = () =>
    items.map((todo) => (
      <li key={todo.id}>
        <span>{todo.text}</span>
        <button onClick={onDeleteTodo.bind(null, todo.id)}>DELETE</button>
      </li>
    ));

  return <ul>{contentRender()}</ul>;
};
