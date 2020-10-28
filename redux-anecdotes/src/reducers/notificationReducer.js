

const TOGGLE_NOTIFICATION = 'TOGGLE:NOTIFICATION'
const  CREATE_NOTIFICATION = 'CREATE:NOTIFICATION'

const reducer = (state = { content : '' , visisible : false }, action ) => {

  switch(action.type){
  case TOGGLE_NOTIFICATION:
    return { ...state,visible:!state.visible }
  case CREATE_NOTIFICATION:
    return { ...state , content : action.content ,visible:true }
  default:
    return state
  }
}


export const toogleNotification = () => ({ type : TOGGLE_NOTIFICATION })

export const createNotification = (content) => ({ type : CREATE_NOTIFICATION , content  })

export default reducer