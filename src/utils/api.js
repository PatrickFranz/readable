import {API_URI, GET_POSTS, POST_POSTS, UP_VOTE, DOWN_VOTE} from '../constants/api-constants';
import { updateList } from '../actions/index';
import uuid from 'js-uuid';

let userId = localStorage.userID;
if(!userId){
  localStorage.userId = uuid.v4();
}

const HEADERS = {
    'Authorization': userId,
    'Content-Type' : 'application/json'
}


export function fetchUpdateList(dispatch){
  fetch(`${API_URI}${GET_POSTS}`,
          {
            headers: HEADERS
          }).then( response => response.json())
            .then( list => dispatch(updateList(list)) );
}

export function vote(id, voteString){
  return fetch(`${API_URI}${POST_POSTS}/${id}`,
          {
            headers: HEADERS,
            method: 'POST',
            body: JSON.stringify({'option': voteString})
          }
        );
}
