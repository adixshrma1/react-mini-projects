import { createContext, useContext, useReducer } from "react";

const TodoContext = createContext();

export const TodoProvider = ({children})=>{
    const todoReducer =(state, action)=>{
        switch(action.type){
            case "Add_Todo":
                return [...state, {id: Date.now(), completed: false, text: action.payload}]
            case "Delete_Todo":
                return state.filter((item) => item.id !== action.payload)
            case "Toggle_Todo":
                return state.map((item) => item.id === action.payload ? {...item, completed: !item.completed} : item)
            case "Edit_Todo":
                return state.map((item)=> item.id === action.payload.id ? {...item, text: action.payload.text} : item)
            case "Retrieve":
                return action.payload;
        }
    }
    const [todoState, todoDispatch] = useReducer(todoReducer, [])
    return(
        <TodoContext.Provider value={{todoState, todoDispatch}}>
            {children}
        </TodoContext.Provider>
    )
}

export const useTodo = ()=>{
    return useContext(TodoContext);
}