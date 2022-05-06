import React from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, todos, setTodos, setEditTodo, editTodo }) => {
  const updateTodo = (title, id, completed) => {
    const newtodo = todos.map((todo) => 
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newtodo);
    setEditTodo("");
    setInput('')
  };
  const onInputChange = (event) => {
    setInput(event.target.value);
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };
  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter a todo"
        className="task-input"
        value={input}
        required
        onChange={onInputChange}
      />
      <button type="submit" className="button-add">
        Add
      </button>
    </form>
  );
};

export default Form;
