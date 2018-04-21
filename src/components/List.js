import React from 'react';
import {connect} from 'react-redux';
import * as API from '../utils/api';
import Post from './Post';
import {API_URI, GET_POSTS} from '../constants/api-constants';
import {UPDATE_LIST} from '../constants/actions';

const mapDispatchToProps = (dispatch) => {
  return{
    listUpdate: () => API.fetchUpdateList(dispatch)

    }
};

const mapStateToProps = (state) => {
  return{
    posts: state.posts  
  }
}

class ConnectedList extends React.Component{
  
  componentDidMount = () => {
    this.props.listUpdate();
  }
  
  render(){
    return(
      <div>
        <ul className='list-group'>
          {this.props.posts.map(post => 
              <li key={post.id} className='list-group-item'><Post post={post}/></li>
          )}
        </ul>
      </div>
    )
  }
}

const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList)
export default List;