import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { FeelingsForm } from './feelingsForm';

export class Welcome extends Component {
    
    state = {
        date: new Date()
    }

    userLoggedIn = () => {
        if (Object.keys(this.props.currentUser).length === 0 || this.props.currentUser["error"]) {
            return (
                <Container>
                    <Header>Welcome!<br /> Would you like to <Link to="/login">log in,</Link> or <Link to='/signup'>create a new account?</Link> </Header>
                    <Header.Subheader>Logging in allows us to keep track of how you feel on a given day, which helps our predictions</Header.Subheader>
                </Container>
            )
        } else {
            return (
                <Container>
                    <Header>Welcome back, {this.props.currentUser.username}! </Header>
                    <FeelingsForm date={this.state.date} />
                </Container>
            )
        }
    }

    todaysFeelings = () => {
        console.log('feelings', this.props.feelings)
        // if (this.props.feelings && )
    }
    
    render() {
        return (
            <Container>
                {this.userLoggedIn()}
            </Container>
        );
    }
}

// export default Welcome;
