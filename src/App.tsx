import { useState } from 'react';

import { NewTodo } from './components/NewTodo';
import { TodoList } from './components/TodoList';

import { Todo } from './todo.models';

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string): void => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
  };
  
  const todoDeleteHandler = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler}/>
    </div>
  );
};

export default App;
