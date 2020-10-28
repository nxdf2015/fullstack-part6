
import * as ServiceAnecdotes from '../services/anecdotes'


const  VOTE = 'VOTE'
const CREATE = 'CREATE'
const INIT_ANECDOTE = 'INIT:ANECDOTE'

// const anecdotesAtStart = [
//   'If it hurts, do it more often',
//   'Adding manpower to a late software project makes it later!',
//   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//   'Premature optimization is the root of all evil.',
//   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
// ]




const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote,id = null ) => {
  return {
    content: anecdote,
    id: id || getId(),
    votes: 0,
  }
}



// const initialState = anecdotesAtStart.map(asObject)

const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  let newState
  switch (action.type) {
  case  VOTE:
    newState =  state.map(anecdote => anecdote.id === action.id ? { ...anecdote , votes : anecdote.votes + 1 } : anecdote)
    newState.sort((x,y) => x.votes < y.votes? 1 : -1 )
    return newState
  case CREATE:
    console.log('create action')
    return [...state , asObject(action.content,action.id )]
  case INIT_ANECDOTE:
    return action.data
  default:
    return state
  }

}

const voteAction = id => ({
  type: VOTE ,
  id
})


const createAction = (args) => ({
  type :  CREATE,
  ...args
})


const initAnecdote = data => ({
  type: INIT_ANECDOTE,
  data
})


export const asyncInitAnecdote = () => async dispatch => {
  const response = await ServiceAnecdotes.getAll()
  dispatch(initAnecdote(response))
}

export const asyncCreationAction = (content) => async dispatch => {

  const anecdote = asObject(content)
  await ServiceAnecdotes.create(anecdote)
  dispatch(createAction({ content,id : anecdote.id }))

}

export const asyncVoteAction = id => async (dispatch,getState)  => {
  let anecdote = getState().anecdotes.find(anecdote => anecdote.id === id)

  await ServiceAnecdotes.updateVote({ ...anecdote, votes:anecdote.votes+1 })
  dispatch(voteAction(id))
}





export default reducer
