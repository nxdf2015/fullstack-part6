import React from 'react'
import { useDispatch } from 'react-redux'
import { anecdoteActions, notificationActions } from '../reducers'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const createAnecdote = event => {
    event.preventDefault()
    const content = event.target.content.value
    if (content !== ''){

      dispatch(anecdoteActions.asyncCreationAction(content))
      dispatch(notificationActions.setNotification(`create anecdote ${content}`))

    }

  }
  return (
    <>
      <h2>create new</h2>
      <form onSubmit={createAnecdote}>
        <div>
          <input name="content" />
        </div>
        <button type="submit">create</button>
      </form>
    </>
  )}

export default AnecdoteForm
