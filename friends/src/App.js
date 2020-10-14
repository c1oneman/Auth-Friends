import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <Link to='/login'> Login </Link>
            <Link to='/friendsList'>Friends </Link>
            <Link to='/addFriend'>Add a Friend</Link>
          </header>

          <Route path='/login' component={Login} />
          <PrivateRoute exact path='/friendsList' component={FriendsList} />
          <PrivateRoute exac path='/addFriend' component={AddFriend} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state =>{
  return{
    friends: state.friends
  }
}

export default connect(mapStateToProps, {})(App);