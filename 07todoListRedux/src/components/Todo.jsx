import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todoSlice";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const [todoMsg, setTodoMsg] = useState(todo.text);
  const [isEditable, setIsEditable] = useState(false);
  return (
    <>
      <div className="flex gap-x-2">
        <input
          className={`bg-transparent w-full px-2 outline-none border ${isEditable? "": "border-transparent cursor-default"}`}
          type="text"
          value={todoMsg}
          readOnly={!isEditable}
          onChange={(e) => setTodoMsg(e.target.value)}
        />
        {isEditable ? (
          <button
            className="px-3 py-1 bg-green-500 rounded-md"
            onClick={() => {dispatch(updateTodo({id: todo.id, text: todoMsg})); setIsEditable(false)}}
          >Save</button>
        ) : (
          <button
            className="px-3 py-1 bg-green-500 rounded-md"
            onClick={() => setIsEditable(true)}
          >
            Edit
          </button>
        )}

        <button
          className="px-3 py-1 bg-red-500 rounded-md"
          onClick={() => dispatch(removeTodo(todo.id))}
        >
          Remove
        </button>
      </div>
    </>
  );
};

export default Todo;
