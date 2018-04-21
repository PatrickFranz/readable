import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = (state) => { 
  return{
    state
  }
}

class ConnectedPostDetails extends React.Component{
  render(){
    return(
      <div className="post-details">
        Post Details
      </div>
    )
  }
}
const PostDetails = connect(mapStateToProps)(ConnectedPostDetails);
export default PostDetails;