import React from 'react';
import Vote from './Vote';
import {Link} from 'react-router-dom';

class Post extends React.Component{
  
  upvote = (e) => {
    console.log(e)
    //Add 1 to voteScore
  }
  downvote = (e) => {
    console.log(e);
    //Subract 1 to voteScore
  }
  
  render(){
    const {post} = this.props;
    return(
      <Link to={`/post-details/${post.id}`} className='post'>
        <Vote upvote={this.upvote}
              downvote={this.downvote}
              post={post}
              />
        <p>{post.title}</p>
        <span className="comment-bbl">
          <span className="comment-count">{post.commentCount}</span>
          <img src={require('../images/comment-bbl.svg')}/>
        </span>
      </Link>
    )
  }

}

export default Post;

// id	String	Unique identifier
// timestamp	Integer	Time created - default data tracks this in Unix time. You can use Date.now() to get this number
// title	String	Post title
// body	String	Post body
// author	String	Post author
// category	String	Should be one of the categories provided by the server
// voteScore	Integer	Net votes the post has received (default: 1)
// deleted	Boolean	Flag if post has been 'deleted' (inaccessible by the front end), (default: false)


