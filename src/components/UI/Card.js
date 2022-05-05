import React from 'react'
import './Card.css'

// Shell 역할을 하는 Component 
// : ExpenseItem 콘텐츠나 Expenses 콘텐츠를 <div> 대신 특정 CSS 로 꾸며진 카드로 감싼다
// e.g.) ExpenseItem.js 에서 return (<div>...</div>) 대신 return (<Card>...</Card>)
// 단, custom component 인 Card 컴포넌트를 다른 콘텐츠에서 wrapper 로 사용할 수는 없다 
// 그렇다면 return (<Card>...</Card>) 와 같이 사용하려면 어떻게 해야할까?
// => 재사용 래퍼 컴포넌트 (reusuable wrapper component) 를 만든다!
// props.children
// children 은 reserved name. this special 'children' prop will always be contents, 
// which are between opening tag and closing tag of my custom tag.

const Card = (props) => {
  const classes = 'card ' + props.className // 외부에서 받은 모두 className 을 문자열에 담기
  return (
    <div className={classes}>{props.children}</div>
  )
}

export default Card