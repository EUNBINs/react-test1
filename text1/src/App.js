import React, { useState } from 'react'
import './App.css'

function App() {

  const [todo, setTodo] = useState([])
  console.log(setTodo)

  // 내용물
  const [content, setContent] = useState('');

  const contentChangeHandler = (event) => {
    setContent(event.target.value)
  }

  // 추가버튼
  const addButtonHandler = () => {
    const newTodo = {
      id: todo.length + 1,
      content
    }
    setTodo([...todo, newTodo])
  }
  return (
    <div className='layout-Box'>
      <div className='input-Box'>
        <input 
          type="text"
          value={content}
          onChange={contentChangeHandler}/>
        <button onClick={addButtonHandler}>추가하기</button>
      </div>
      <div>
        <h1 className='todo-Comment'>Todo List</h1>
        <div className='todo-Container'>
          {todo.map(function(item){
            return <div className='todo-Box'>{item.content}</div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App