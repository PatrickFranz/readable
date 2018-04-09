import React from 'react';
import Vote from './Vote';

const id = 1
      ,timestamp = Date.now()
      ,title = 'A Title'
      ,body = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis voluptate, omnis quisquam aperiam perspiciatis excepturi earum reprehenderit libero iure tempora commodi nisi rem in repudiandae temporibus ducimus expedita quos esse.'
      ,author = 'Me'
      ,voteScore = 1
      ,deleted = false;

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
    return(
      <div className='post'>
        <Vote upvote={this.upvote}
              downvote={this.downvote}
              // voteTally={voteTally}
              />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet iusto eum voluptatum labore nulla quisquam alias corporis natus voluptates quos! Itaque unde nostrum illum eligendi modi harum at ipsam hic.</p>
      </div>
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


