import React from 'react'
import { useSelector , useDispatch } from 'react-redux'

import { anecdoteActions,notificationActions } from '../reducers'
import { useFilter } from '../helpers/helperFilter'

const AnecdoteList = () => {
  const anecdotes = useSelector(useFilter)
  const dispatch = useDispatch()

  const vote = (anecdote) => {
    dispatch(anecdoteActions.asyncVoteAction(anecdote.id))

    dispatch(notificationActions.setNotification(`you voted ${anecdote.content} `,1000))

  }

  return (anecdotes.map(anecdote =>
    <div key={anecdote.id}>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={() => vote(anecdote)}>vote</button>
      </div>
    </div>
  ))
}


export default AnecdoteList