import React from "react";
import PropTypes from "prop-types";
import FriendsComponent from "../components/FriendsComponent";

import { Container, Header, Icon, Segment } from "semantic-ui-react";

const Friends = ( props ) => {
    return (
        <Container>
            <Segment>
                <Header as='h2' icon textAlign='center'>
                    <Icon name='users' circular />
                    <Header.Content>Friends</Header.Content>
                    <FriendsComponent />
                </Header>
            </Segment>
        </Container>
    );
};

Friends.propTypes = {};
Friends.defaultProps = {};

export default Friends;
