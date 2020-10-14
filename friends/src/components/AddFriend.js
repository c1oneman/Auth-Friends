import React, { Component } from 'react';
import { addFriend } from '../actions/index';
import { connect } from 'react-redux';

class AddFriend extends Component{
    constructor(){
        super();
        this.state={
            name: 'name',
            email: 'email',
            age: 'age'
        }
    }

    handleChange = e =>{
        this.setState({[e.target.name]: e.target.value})
    }

    submitFriend = e =>{
        e.preventDefault();
        const newFriend = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        }

        this.props.addFriend(newFriend);
    }


    render(){
        return(
            <form onSubmit={(e)=>this.submitFriend(e)}>
                <input 
                    type='text' 
                    name='name' 
                    value={this.state.name} 
                    onChange={e =>this.handleChange(e)} 
                />
                <input 
                    type='text' 
                    name='email' 
                    value={this.state.email} 
                    onChange={e =>this.handleChange(e)} 
                />
                <input 
                    type='text' 
                    name='age' 
                    value={this.state.age} 
                    onChange={e =>this.handleChange(e)} 
                />
                <input onSubmit={(e)=>this.submitFriend(e)} type='submit' />
            </form>
        );
    }
}


export default connect(null, { addFriend })(AddFriend);