import React from 'react'
import { useSelector , useDispatch } from 'react-redux'

import { anecdoteActions,notificationActions } from '../reducers'
import { useFilter } from '../helpers/helperFilter'

const AnecdoteList = () => {
  const anecdotes = useSelector(useFilter)
  const dispatch = useDispatch()

  const vote = (id,content) => {dispatch(anecdoteActions.voteAction(id))
    dispatch(notificationActions.createNotification(`you voted ${content} `))
    setTimeout(() => dispatch(notificationActions.toogleNotification()),2000)
  }

  return (anecdotes.map(anecdote =>
    <div key={anecdote.id}>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={() => vote(anecdote.id,anecdote.content)}>vote</button>
      </div>
    </div>
  ))
}


export default AnecdoteList