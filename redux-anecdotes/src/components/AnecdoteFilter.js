import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { filterActions } from '../reducers'
const AnecdoteFilter = () => {
  const dispatch = useDispatch()
  const filter = useSelector(state => state.filter)

  const createFilter = (event) => {
    event.preventDefault()

    const filter = event.target.value
    dispatch(filterActions.createFilter(filter))
  }

  return (
    <form>
      <label>
        filter
        <input type="text" name="filter" onChange={createFilter} value={filter}/>
      </label>
    </form>
  )
}

export default AnecdoteFilter
