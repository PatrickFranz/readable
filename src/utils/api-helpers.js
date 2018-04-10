import {API_URI} from '../constants/api-constants';
import { updateList } from '../actions/index';


export function fetchFromApi(path){
  return function(dispatch, getState){
    return fetch(`${API_URI}${path}`,
          {
            headers: {
              'Authorization': "user",
              'Content-Type' : 'application/json'
            }
          }).then( response => response.json())
            .then( list => {
              dispatch(updateList(list))
          });
  }
}