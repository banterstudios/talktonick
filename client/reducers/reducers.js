import { combineReducers } from 'redux'

// Root reducer - Combines all reducers passed in ready for a redux store
const rootReducer = combineReducers({
  test: (state = {}) => state
})

export default rootReducer
