import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";

const TodoItem = ({ todo }) => {
  const { todoDispatch } = useTodo();
  const [isEditable, setIsEditable] = useState(false);
  const [todoText, setTodoText] = useState(todo.text);

  const handleSave = () => {
    todoDispatch({
      type: "Edit_Todo",
      payload: { id: todo.id, text: todoText },
    });
    setIsEditable(false);
  };
  const handleEdit = ()=>{
    if(todo.completed) return;
    setIsEditable(true)
  }
  return (
    <>
      <div className={`flex rounded-lg gap-x-3 px-3 py-1.5 shadow-sm shadow-white/50 ${todo.completed? 'bg-gray-400': 'bg-blue-300'}`}>
        <input
            className="cursor-pointer"
          type="checkbox"
          checked={todo.completed}
          onChange={() =>
            todoDispatch({ type: "Toggle_Todo", payload: todo.id })
          }
        />
        <input
            className={`border w-full rounded-lg px-2 bg-transparent outline-none ${isEditable? "border-black/10" : "border-transparent"}
            ${todo.completed? "line-through": ""}`}
          type="text"
          value={todoText}
          readOnly={!isEditable}
          onChange={(e) => setTodoText(e.target.value)}
        />
        {isEditable ? (
          <button onClick={() => handleSave()}>📁</button>
        ) : (
          <button className={`${todo.completed? "opacity-50 cursor-default": ""}`} onClick={() => handleEdit()}>✏️</button>
        )}

        <button
          onClick={() =>
            todoDispatch({ type: "Delete_Todo", payload: todo.id })
          }
        >
          ❌
        </button>
      </div>
    </>
  );
};

export default TodoItem;
