import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";

const TodoForm = () => {
    const [todo, setTodo] = useState("");
    const {todoDispatch} = useTodo();
    const add = (e)=>{
        e.preventDefault();
        if(todo.length == 0) return;
        todoDispatch({type: "Add_Todo", payload: todo})
        setTodo("");
    }
  return (
    <>
      <form onSubmit={add} className="flex">
        <input
          className="w-full border border-black/10 outline-none rounded-s-md px-3 py-1.5 text-white bg-white/20"
          type="text"
          placeholder="Write Todos..."
          value={todo}
          onChange={(e)=> setTodo(e.target.value)}
        />
        <button
            type="submit"
            className="bg-green-600 text-white rounded-e-md py-1 px-3"
            >
          Add
        </button>
      </form>
    </>
  );
};

export default TodoForm;
