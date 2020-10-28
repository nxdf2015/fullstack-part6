import { create } from '../services/anecdotes'


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

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0,
//   }
// }



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
    create(action.content)
    return [...state , { content: action.content  , id : getId () , votes : 0 }]
  case INIT_ANECDOTE:
    return action.data
  default:
    return state
  }

}

export const voteAction = id => ({
  type: VOTE ,
  id
})


export const createAction = content => ({
  type :  CREATE,
  content
})


export const initAnecdote = data => ({
  type: INIT_ANECDOTE,
  data
})



export default reducer
