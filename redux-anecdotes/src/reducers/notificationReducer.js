

const TOGGLE_NOTIFICATION = 'TOGGLE:NOTIFICATION'
const  CREATE_NOTIFICATION = 'CREATE:NOTIFICATION'

const reducer = (state = { content : '' , visisible : false }, action ) => {

  switch(action.type){
  case TOGGLE_NOTIFICATION:
    return { ...state,visible:!state.visible }
  case CREATE_NOTIFICATION:
    return { ...state , content : action.content  }
  default:
    return state
  }
}

const toogleNotification = () => ({ type : TOGGLE_NOTIFICATION })

const createNotification = (content) => ({ type : CREATE_NOTIFICATION , content  })

export const setNotification = (message  , delay = 2) =>   (dispatch) => {
  dispatch(createNotification(message))
  dispatch(toogleNotification())
  setTimeout(() => dispatch(toogleNotification()),delay * 1000)

}

export default reducer