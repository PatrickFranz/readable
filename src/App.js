import React, { Component } from 'react';
import Post from './components/Post';
import List from './components/List';
import {Route} from 'react-router';
import PostDetail from './components/PostDetail';

import { createPostArray } from './utils';
import { connect } from 'react-redux';
import { API_URI, GET_POSTS, GET_CATEGORIES} from './constants/api-constants';
import {updateList} from './actions/index'
import './App.css';


class App extends Component {
  
 
  render() {
    return (
      <div className="app">
        <Route exact path = '/' render={()=> (
          <div>
            <header>
              <h1>
                Readable
              </h1>
            </header>
            <main>
              <List />  
              <span className='add-post'>
                <img 
                  src={require("./images/add-post.svg")}
                  alt=""
                  onClick={(e)=>console.log('adding post!')}
                  />
              </span>
            </main>
            <footer>
              FOOTER 
            </footer> 
          </div>
          )} />

          <Route exact path = '/post-details' component={PostDetail} />
        </div>
    );
  }
}

function mapStateToProps(store){
    return{
      posts: store.posts
    }
}

export default connect(mapStateToProps)(App);
