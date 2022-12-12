import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import './App.css'

  const initialExpenses = [
    {
      id: 'e1',
      title: 'Jar of Mermaid Hair',
      amount: 94.12,
      date: new Date(2022, 7, 14),
    },
    { id: 'e2', title: 'Devastating new personality', amount: 799.49, date: new Date(2022, 2, 12) },
    {
      id: 'e3',
      title: 'Tiny Horse',
      amount: 294.67,
      date: new Date(2022, 2, 28),
    },
    {
      id: 'e4',
      title: 'Size 54 Nike Air Force Ones',
      amount: 450,
      date: new Date(2022, 5, 12),
    },
  ];

function App () {

  const [expenses, setExpenses] = useState(initialExpenses);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  }

  return (
    <div>
      <h2 className="title">Curb My Profligacy</h2>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
