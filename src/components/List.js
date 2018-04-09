import React from 'react';
import {connect} from 'react-redux';
import { updateList } from '../actions/index';
import {API_URI, GET_POSTS} from '../constants/api-constants';

function fetchAllPosts(path){
  return function(dispatch, getState){
    return fetch(`${API_URI}${path}`,
          {
            headers: {
              'Authorization': "user",
              'Content-Type' : 'application/json'
            }
          }).then( response => {
              console.log("Response:" ,response.json())
              dispatch(updateList(response.json()))
          });
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts  
});

class ConnectedList extends React.Component{
  
  componentDidMount(){
    fetchAllPosts(GET_POSTS);
  }
  
  render(){
    return(
      <div>
        {this.posts}
      </div>
    )
  }
}

const List = connect(mapStateToProps)(ConnectedList)
export default List;