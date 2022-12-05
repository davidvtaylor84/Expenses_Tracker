import React, {useState} from 'react'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesChart from './ExpensesChart'

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  const expensesFilteredByYear = props.expenses.filter(expense => 
    {return expense.date.getFullYear().toString() === filteredYear;});

  
  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter onChangeYearFilter={filterChangeHandler} selected={filteredYear}/>
        <ExpensesChart expenses={expensesFilteredByYear}/>
        <ExpensesList expenses={expensesFilteredByYear}/>
      </Card>
    </div>
  )
}

export default Expenses