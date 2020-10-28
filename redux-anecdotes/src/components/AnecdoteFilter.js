import React from 'react'
import { connect  } from 'react-redux'

import { filterActions } from '../reducers'
const AnecdoteFilter = (props ) => {



  const createFilter = (event) => {
    event.preventDefault()

    const filter = event.target.value
    console.log('------------------')
    props.createFilter(filter)
  }

  return (
    <form>
      <label>
        filter
        <input type="text" name="filter" onChange={createFilter} value={props.filter}/>
      </label>
    </form>
  )
}

const mapStateToProps = state => ({ filter : state.filter })

const mapDispatchToProps = { createFilter : filterActions.createFilter }

export default connect(mapStateToProps,mapDispatchToProps)( AnecdoteFilter)

