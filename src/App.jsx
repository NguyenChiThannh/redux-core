import './App.css'
import { useSelector } from 'react-redux'
import { increaseCount, decreaseCount, addTodo, deleteTodo, addTodoAsync } from './redux/actions'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'

function App() {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const count = useSelector((state) => state.count.count)
  const todos = useSelector((state) => state.todos.todos)
  console.log('🚀 ~ App ~ todos:', todos)
  const handleIncrease = () => {
    dispatch(increaseCount(10))
  }
  const handleDecrease = () => {
    dispatch(decreaseCount(10))
  }

  const handleOnChange = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = () => {
    dispatch(addTodoAsync())
    setName('')
  }
  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id))
  }

  return (
    <div className="App">
      <h1>Hello {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <input type="text" value={name} onChange={handleOnChange} onSubmit={handleSubmit}/>
      <button onClick={handleSubmit}>Add Todo</button>
      <div>
        {todos.map((todo) => {
          return (
            <div key ={todo.id}>
              {todo.name}
              <button onClick={() => handleDeleteTodo(todo.id)}>Xóa</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default App