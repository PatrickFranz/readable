import React from 'react';

class Vote extends React.Component {
  
  render(){
    const {upvote, downvote} = this.props;

    return (
      <div className='vote'>
        <span onClick={this.props.upvote} className='arrow arrow-up'></span>
        <span>{this.props.voteTally || 1}</span>
        <span onClick={this.props.downvote} className='arrow arrow-dn'></span>
      </div>
    );
  }
}

export default Vote