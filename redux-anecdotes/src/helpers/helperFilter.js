export const useFilter = state => {
  const filter = state.filter
  if (filter !== ''){
    const patternFilter = RegExp(`.+${filter}.+`,'i')
    return state.anecdotes.filter(anecdote => anecdote.content.match(patternFilter)  )
  }
  else{
    return state.anecdotes
  }
}


