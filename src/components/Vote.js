import React from 'react';
import { connect } from 'react-redux';
import {upvote, downvote} from '../actions/index';
// import {upVote, downVote} from '../utils/api'; 



const mapStateToProps = (state) => {
  return({
    state
  })
}
const mapDispatchToProps = (dispatch) => {
  return({
    upvote:   (post) => dispatch(upvote(post)),
    downvote: (post) => dispatch(downvote(post)),
  })
}

const ConnectedVote = (props) => {
 const {post} = props;
  return(
      <div className='vote'>
        <span onClick={() => props.upvote(post)} className='arrow arrow-up'></span>
        <span>{post.voteScore|| 1}</span>
        <span onClick={() => props.downvote(post)} className='arrow arrow-dn'></span>
      </div>
  )
}

const Vote = connect(mapStateToProps, mapDispatchToProps)(ConnectedVote);
export default Vote