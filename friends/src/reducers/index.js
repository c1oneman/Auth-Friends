import { LOGIN_START, LOGIN_SUCCESS, ADD_FRIENDS_START, ADD_FRIENDS_SUCCESS, GET_FRIENDS_START, GET_FRIENDS_SUCCESS } from "../actions";

const initialState = {
    loggingIn: false,
    fetchingFriends: false,
    error: null,
    friends: [],
    addingFriend: false,
    loggedIn: false
};

function reducer(state = initialState, action){
    switch(action.type){
        case LOGIN_START:
            return({
                ...state,
                loggingIn: true,
                error: '',
                loggedIn: false
            })
        case LOGIN_SUCCESS:
            return({
                ...state,
                loggingIn: false,
                error: '',
                loggedIn: true
            })
        case GET_FRIENDS_START:
            return({
                ...state,
                fetchingFriends: true,
                error: null,
                loggingIn: false
            })
        case GET_FRIENDS_SUCCESS:
            return({
                ...state,
                fetchingFriends: false,
                error: null,
                friends: action.payload
            })
        case ADD_FRIENDS_START:
            return({
                ...state,
                addingFriend: true,
            })
        case ADD_FRIENDS_SUCCESS:
            return({
                ...state,
                addingFriend: false,
                friends: action.payload
            })
        default:
        return{
            ...state
        };
    };
};

export default reducer;