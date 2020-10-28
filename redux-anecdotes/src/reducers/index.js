import { combineReducers } from 'redux'

import notificationReducer from './notificationReducer'
import anecdoteReducer from './anecdoteReducer'
import filterReducer from './filterReducer'
import  * as anecdoteActions from './anecdoteReducer'
import  * as notificationActions from './notificationReducer'
import * as filterActions from './filterReducer'
const reducer = combineReducers({
  notification : notificationReducer,
  anecdotes : anecdoteReducer,
  filter: filterReducer
})

export default reducer

export { anecdoteActions , notificationActions ,filterActions }