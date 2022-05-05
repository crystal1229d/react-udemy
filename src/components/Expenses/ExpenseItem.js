import React, { useState } from 'react'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

const ExpenseItem = (props) => {

  const [Title, setTitle] = useState(props.title)

  return (
      <li>
        <Card className='expense-item'>
          <ExpenseDate date={props.date} />
          <div className='expense-item__description'>
            <h2>{Title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
          </div>
        </Card>
      </li>
  )
}

export default ExpenseItem