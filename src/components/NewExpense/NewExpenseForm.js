import React, { useState } from 'react'
import './NewExpenseForm.css'

function NewExpenseForm(props) {

  const [EnteredTitle, setEnteredTitle] = useState('')
  const [EnteredAmount, setEnteredAmount] = useState(0)
  const [EnteredDate, setEnteredDate] = useState('')

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
  }

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)

  }

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()

    const expenseData = {
      title: EnteredTitle,
      amount: EnteredAmount,
      date: new Date(EnteredDate)
    }

    props.onSaveExpenseData(expenseData)
    setEnteredTitle('')
    setEnteredAmount(0)
    setEnteredDate('')
  }

  return (
    <form onSubmit={submitHandler}>
        <div className="new-expense_controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={EnteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={EnteredAmount} onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2022-01-01" max="2025-12-31" value={EnteredDate} onChange={dateChangeHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
          <button type='button' onClick={props.onCancel}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
    </form>
  )
}

export default NewExpenseForm