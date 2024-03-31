import { Types } from './types'

const initState = {
  todos : [],
}

export const todoReducer = (state = initState, action) => {
  console.log('🚀 ~ todoReducer ~ state:', state)
  console.log('🚀 ~ todoReducer ~ action:', action)
  switch (action.type) {
  case Types.addTodo:
    return {
      todos: [...state.todos, action.payload]
    }
  case Types.deleteTodo:
    return {
      todos: state.todos.filter((todo) => todo.id !== action.payload)
    }
  default:
    return state
  }
}


export default todoReducer