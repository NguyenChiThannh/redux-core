import { Types } from './types'

const initState = {
  count: 1,
}

export const countReducer = (state = initState, action) => {
  console.log('🚀 ~ countReducer ~ action:', action)
  switch (action.type) {
  case Types.increaseCount:
    return {
      count: state.count += action.payload
    }
  case Types.decreaseCount:
    return {
      count: state.count -= action.payload
    }

  default:
    return state
  }
}