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
          }).then( response => response.json())
            .then( list => {
              dispatch(updateList(list))
          });
  }
}

const mapDispatchToProps = (dispatch) => {}

const mapStateToProps = (state) => ({
  posts: state.posts  
});


class ConnectedList extends React.Component{
  
  componentDidMount = () => {
    this.props.fetchAllPosts(GET_POSTS);
  }
  
  render(){
    return(
      <div>
        <ul className='list-group'>
          {this.props.posts.map(post => 
            <li key={post.id} className='list-group-item'>{post.title}</li>
          )}
        </ul>
      </div>
    )
  }
}

const List = connect(mapStateToProps, {fetchAllPosts})(ConnectedList)
export default List;