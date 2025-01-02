import { useSelector } from "react-redux"
import { AddTodo } from "./components/AddTodo"
import Todo from "./components/Todo"

function App() {
  const todos = useSelector(state => state.todoList.todos)
  return (
    <>
      <AddTodo />
      {todos.map((todo)=>(
        <div 
          className="bg-gray-800 text-white mx-40 px-2 py-2 rounded-lg mt-3"
          key={todo.id}>
          <Todo todo={todo}/>
        </div>
      ))}
    </>
  )
}

export default App
