import React, { useState } from 'react'   
import './NewExpense.css'
import NewExpenseForm from './NewExpenseForm'

function NewExpense(props) {

  const [isEditing, setisEditing] = useState(false)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
  }

  const startEditingHandler = () => {
    setisEditing(true)
  }

  const stopEditingHandler = () => {
    setisEditing(false)
  }

  return (
    <div className="new-expense">
        { !isEditing && <button onClick={startEditingHandler}>Add New Expense</button> }
        { isEditing && <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} /> }
    </div>
  )
}

export default NewExpense