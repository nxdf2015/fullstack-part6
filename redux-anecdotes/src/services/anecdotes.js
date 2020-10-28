import axios from 'axios'


const URL_BASE = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(URL_BASE)
  return response.data
}

const create = async (anecdote ) => {
  const response = await axios.post(URL_BASE,anecdote)
  return response.data
}

const updateVote = async (anecdote) => {
  const response = await axios.put(`${URL_BASE}/${anecdote.id}`,anecdote)
  return response
}

export{ getAll, create , updateVote }