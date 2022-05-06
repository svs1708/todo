import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, todos, setTodos, setEditTodo, editTodo }) => {
  const updateTodo = (title, id, completed) => {
    const newtodo = todos.map((todo) => 
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newtodo);
    setEditTodo("");
    // setInput('')
  };
  useEffect(()=>{
      if(editTodo){
          setInput(editTodo.title)
      }else{
          setInput('')
      }
  },[setInput,editTodo])
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
        {editTodo ? "Ok" : "Add"}
      </button>
    </form>
  );
};

export default Form;
