import React, { Component } from "react";
import { connect } from "react-redux";

import { getFriends } from "../actions";

import PropTypes from "prop-types";

class FriendsComponent extends Component {
    static defaultProps = {};
    
    static propTypes = {};
    
    componentDidMount() {
        this.props.getFriends();
    }
    
    render() {
        return (
            <div></div>
        );
    }
}

const mapStateToProps = state => {
    return {
        friends: state.friendsReducer.friends
    };
};

export default connect( mapStateToProps, { getFriends } )( FriendsComponent );
