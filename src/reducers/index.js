import { ADD_POST, 
         DELETE_POST, UPDATE_LIST, 
         ADD_COMMENT, DELETE_COMMENT, 
         UP_VOTE, DOWN_VOTE } from '../constants/actions';
import * as API from '../utils/api';

const initialState = {
  posts: [],
  comments: [],
}


function reducer(state = initialState, action){
  switch(action.type){
    case ADD_POST:{
      return( 
        Object.assign({}, ...state)
      )
    }
    
    case DELETE_POST: {
      return (
        Object.assign({}, ...state)
      )
    }
    
    case ADD_COMMENT:{
      return (
        Object.assign({}, ...state)
      )
    }
    case DELETE_COMMENT:{
      return(
        Object.assign({}, ...state)
      )
    }
    
    case UPDATE_LIST:{
      return(
        Object.assign({}, ...state, {
          posts: action.posts
        })
      )
    } 
    
    case UP_VOTE: {
      const nPosts = vote(1)
      return(
        Object.assign({}, ...state,{
          posts: nPosts
        }
      ))
    }
    
    case DOWN_VOTE: {
      const nPosts = vote(-1)
      return(
        Object.assign({}, ...state,{
          posts: nPosts
        }
      ))
    }
    
    default: 
    return {
      ...state
    }
  }
  function vote(op){
    const {id} = action.post;
    const {posts} = state;
    const newPosts = posts.map(post => {
      if(post.id === action.post.id){
        post.voteScore += op;
      }
      return post;
    });
    return newPosts
  }

}

export default reducer;