import { ADD_POST, 
         DELETE_POST, UPDATE_LIST, 
         ADD_COMMENT, DELETE_COMMENT, 
         UP_VOTE, DOWN_VOTE } from '../constants/actions';


const initialState = {
  posts: [],
  comments: [],
}

function reducer(state = initialState, action){
  switch(action.type){
    case ADD_POST:
      return( 
        Object.assign({}, ...state)
      )
    case DELETE_POST:
      return (
        Object.assign({}, ...state)
      )

    case ADD_COMMENT:
      return (
        Object.assign({}, ...state)
      )

    case DELETE_COMMENT:
      return(
        Object.assign({}, ...state)
      )
    
    case UPDATE_LIST:
      return(
        Object.assign({}, ...state, {
          posts: action.posts
        })
      )
    
    case UP_VOTE: 
      return {}
    
    case DOWN_VOTE: 
      return {}
    
    default: 
      return {
        ...state
      }
    

  }
}

export default reducer;