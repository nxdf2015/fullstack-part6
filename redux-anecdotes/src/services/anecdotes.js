import axios from 'axios'

const URL_BASE = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(URL_BASE)
  return response.data
}

const create = async (content) => {
  await axios.post(URL_BASE,{ content })
}


export{ getAll, create }