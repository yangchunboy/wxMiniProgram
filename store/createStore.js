import { createStore, applyMiddleware, combineReducers } from 'chuck-wx-redux'
import user from './user'

const rootReducer = combineReducers({
  user
})

const store = createStore(rootReducer)

export default store
