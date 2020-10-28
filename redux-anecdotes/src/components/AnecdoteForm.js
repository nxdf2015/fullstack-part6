import React from 'react'
import { connect } from 'react-redux'
import { anecdoteActions, notificationActions } from '../reducers'

const AnecdoteForm = (props) => {
  const createAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.content.value
    if (content !== '') {
      props.createAnecdote(content)
      props.setNotification(`create anecdote ${content}`)
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
  )
}

const mapDispatchToProps = {
  createAnecdote: anecdoteActions.asyncCreationAction,
  setNotification: notificationActions.setNotification,
}
export default connect(null, mapDispatchToProps)(AnecdoteForm)
