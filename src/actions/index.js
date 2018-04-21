import {ADD_POST, DELETE_POST, 
        UPDATE_LIST, UP_VOTE,
        DOWN_VOTE } from '../constants/actions';

import * as API_CONST from '../constants/api-constants';
import * as API from '../utils/api';

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

export function upvote(post){
  API.vote(post.id, API_CONST.VOTE_UP);

  return{
    type: UP_VOTE,
    post
  }
}

export function downvote(post){
  API.vote(post.id, API_CONST.VOTE_DOWN)
  return{
    type: DOWN_VOTE,
    post
  }
}

