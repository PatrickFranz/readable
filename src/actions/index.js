import {ADD_POST, DELETE_POST, UPDATE_LIST} from '../constants/actions';

export function addPost( {id, title, body, author} ){
  return {
    id,
    type: ADD_POST,
    timestamp: Date.Now(),
    title,
    body, 
    author,
    voteScore: 1,
    deleted: false
  }
}

export function deletePost( { id }){
  return{
    type: DELETE_POST,
    id
  }
}

export function updateList(list){
    return {
    type: UPDATE_LIST,
    posts: list
  }
}

