import React, { useState, useReducer } from "react";

const App = () => {
  const [expense, setExpense] = useState('');
  const [amount, setAmount] = useState('');

  function listReducer(state, action) {
    switch (action.type) {
      case "ADD":
        return [...state, { id: Date.now(), expense: action.payload.expense, amount: action.payload.amount }];
      case "DELETE":
        return state.filter((item) => (item.id !== action.payload))
    }
  }
  const [listState, dispatch] = useReducer(listReducer, []);

  return (
    <div className="h-screen flex justify-center items-center bg-cyan-950">
      <div className="bg-gray-50 rounded">
        <div>
          <h1 className="text-center text-2xl font-medium my-1">
            Expense Tracker
          </h1>
          <input
            className="w-96 m-2 p-2 outline-none border-2"
            type="text"
            placeholder="Expense"
            value={expense}
            onChange={(e) => setExpense(e.target.value)}
          />
          <br />
          <input
            className="w-96 m-2 p-2 outline-none border-2"
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <br />
          <button
            className="bg-blue-500 text-white rounded px-3 py-2 m-2 w-96"
            onClick={() => {
              if(expense && amount){
                dispatch({ type: "ADD", payload: {expense, amount} });
                setExpense('');
                setAmount('');
              }
            }}
          >
            Add Expense
          </button>
        </div>
        <ul>
          {listState.map((item) => (
            <li key={item.id} className="flex justify-between w-96 m-2">
              <span>{item.expense}</span>
              <span>Rs {item.amount}</span>
              <button className="bg-red-500 text-white rounded px-2"
              onClick={()=> dispatch({type: 'DELETE', payload: item.id})}>
                Remove
              </button>
            </li>
          ))}
        </ul>
        <div className="m-2 font-semibold text-lg">
          Total: Rs {listState.reduce((total, item)=> total + Number(item.amount), 0)}
        </div>
      </div>
    </div>
  );
};

export default App;
