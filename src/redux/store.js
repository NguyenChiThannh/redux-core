import { applyMiddleware, combineReducers, createStore } from 'redux'
import { countReducer } from './countReducer'
import { todoReducer } from './todoReducer'
import { thunk } from 'redux-thunk'
const rootReducer = combineReducers({
  count: countReducer,
  todos: todoReducer,
})


export const store = createStore(rootReducer, applyMiddleware(thunk))

