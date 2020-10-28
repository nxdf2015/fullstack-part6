import React, { useEffect } from 'react'

import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteFilter from './components/AnecdoteFilter'
import Notification from './components/Notification'

import { useDispatch } from 'react-redux'
import { anecdoteActions } from './reducers'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(anecdoteActions.asyncInitAnecdote())

  }, [dispatch])

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <AnecdoteFilter />
      <AnecdoteForm />
      <AnecdoteList />
    </div>
  )
}

export default App
