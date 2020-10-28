
const CREATE_FILTER = 'CREATE:FILTER'
const reducer = (state = '' ,action) => {
  switch(action.type){
  case CREATE_FILTER:
    return action.filter
  default:
    return state
  }
}

export const createFilter = filter => ({ type : CREATE_FILTER , filter })


export default reducer