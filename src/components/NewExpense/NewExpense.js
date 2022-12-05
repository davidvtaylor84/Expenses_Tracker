import React, {useState} from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {

    const [expenseFormBoolean, setExpenseFormBoolean] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setExpenseFormBoolean(false);
    }

    const expenseFormHandlerToTrue = () => {
        setExpenseFormBoolean(true);
    }

    const expenseFormHandlerToFalse = () => {
        setExpenseFormBoolean(false)
    }


  return (
    <div className='new-expense'>
        {!expenseFormBoolean && <button onClick={expenseFormHandlerToTrue}>Add New Expense Item</button>}
        {expenseFormBoolean && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} expenseFormHandlerToFalse={expenseFormHandlerToFalse}/>}
    </div>
  )
}

export default NewExpense