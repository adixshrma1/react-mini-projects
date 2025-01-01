import React, { useEffect } from 'react'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import { useTodo } from './context/TodoContext'

const App = () => {
  const {todoState, todoDispatch} = useTodo();

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"));
    if(todos && todos.length > 0){
      todoDispatch({type: "Retrieve", payload: todos})
    }
  }, [])

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todoState));
  }, [todoState])

  return (
    <>
      <div className='h-screen bg-sky-950 py-8'>
        <div className='max-w-2xl mx-auto rounded-lg shadow-md px-4 py-3'>
          <h1 className='text-2xl font-bold text-center text-white mt-2 mb-8'>Manage Your Todos</h1>
          <div className='mb-4'>
            <TodoForm/>
          </div>
          <div className='flex flex-col gap-y-3'>
            {todoState.map((todo)=>(
              <div key={todo.id}>
                <TodoItem todo={todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App