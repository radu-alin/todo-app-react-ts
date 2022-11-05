import { useRef } from 'react';

interface NewTodoProps {
  onAddTodo: (text: string) => void;
}

export const NewTodo = ({ onAddTodo }: NewTodoProps) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = textInputRef.current?.value;

    if (enteredText) {
      onAddTodo(enteredText);
    }
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};
