import React from 'react'
import { connect } from 'react-redux'

import { anecdoteActions, notificationActions } from '../reducers'
import { filterAnecdote } from '../helpers/helperFilter'


const AnecdoteList = (props) => {
  return props.anecdotes.map((anecdote) => (
    <div key={anecdote.id}>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={() => props.vote(anecdote)}>vote</button>
      </div>
    </div>
  ))
}

const mapStateToProps = (state) => ({ anecdotes: filterAnecdote(state) })

const mapDispatchToProps = (dispatch) => ({
  vote: (anecdote) => {

    dispatch(anecdoteActions.asyncVoteAction(anecdote.id))

    dispatch(
      notificationActions.setNotification(`you voted ${anecdote.content} `, 5)
    )
  },
})
export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)
