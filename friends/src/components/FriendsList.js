import React, { Component } from 'react';
import { getFriends } from '../actions/index';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

class FriendsList extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.getFriends();
    }

    render(){
        return(
            <div className="friendsListContainer">
                {this.props.fetchingFriends && <Loader type='Plane'/>}
                {this.props.friends.map(friend => <div>{friend.name}</div>)}
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        friends: state.friends,
        fetchingFriends: state.fetchingFriends
    }
}

export default connect(mapStateToProps, { getFriends })(FriendsList);