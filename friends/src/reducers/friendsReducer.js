import { FETCHING_FRIENDS, FAILURE_FETCHING_FRIENDS, FRIENDS_FETCHED } from "../actions";

const initialState = {
    fetchingFriends: false,
    friendsFetched: false,
    friendsSaved: false,
    savingFriends: false,
    updatingFriend: false,
    friendUpdated: false,
    deletingFriend: false,
    friendDeleted: false,
    friends: [],
    error: null
};

export const friendsReducer = ( state = initialState, action ) => {
    debugger;
    switch( action.type ) {
        case FETCHING_FRIENDS:
            return { ...state, fetching: true };
        case FRIENDS_FETCHED:
            return { friends: action.payload, fetching: false, error: null };
        case FAILURE_FETCHING_FRIENDS:
            return { ...state, fetching: false, error: action.payload };
        default:
            return state;
    }
};