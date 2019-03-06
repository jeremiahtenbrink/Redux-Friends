import axios from "axios";

export const FETCHING_FRIENDS = "FETCHING_FRIENDS";
export const FRIENDS_FETCHED = "FRIENDS_FETCHED";
export const FAILURE_FETCHING_FRIENDS = "FAILURE_FETCHING_FRIENDS";

let token = "";

const url = "http://localhost:5000/api";

export const getFriends = () => async dispatch => {
    
    if( token === "" ) {
        await axios.post( `${ url }/login`, { username: "Lambda School", password: "i<3Lambd4" } )
            .then( res => token = res.data.payload )
            .catch( err => console.log( err ) );
    }
    
    dispatch( fetchingData() );
    axios.get( `${ url }/friends`, { headers: { "authorization": token } } )
        .then( res => dispatch( fetchedUserData( res.data ) ) )
        .catch( err => dispatch( errFetchingUserData( err ) ) );
};

const fetchingData = () => {
    return {
        type: FETCHING_FRIENDS
    };
};

const fetchedUserData = data => {
    return {
        type: FRIENDS_FETCHED,
        payload: data
    };
};

const errFetchingUserData = err => {
    return {
        type: FAILURE_FETCHING_FRIENDS,
        payload: err
    };
};