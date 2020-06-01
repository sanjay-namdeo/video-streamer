import React, {Component} from 'react';
import {connect} from 'react-redux';
import {signIn, signOut} from './actions/actions';

const API_KEY = '';

class GoogleAuth extends Component {
    // Load google client:auth2
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                'clientId': API_KEY,
                'scope': 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.handleAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.handleAuthChange);
            })
        })
    }

    // Attach signIn listener to invoke actions on status change
    handleAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            const userId = this.auth.currentUser.get().getId();
            this.props.signIn(userId);
        } else {
            this.props.signOut();
        }
    }

    // When user clicks on Sign In with Google
    onSignInClick = () => this.auth.signIn();

    // When user clicks on Sign Out
    onSignOutClick = () => this.auth.signOut();

    // Render button based on sign in status
    renderLoginButton = (isSignedIn) => {
        if (!isSignedIn) {
            return (
                <div className='ui google button red' onClick={this.onSignInClick}>
                    <i className='google icon'/>
                    Sign In with Google
                </div>
            );
        } else if (isSignedIn) {
            return (
                <div className='ui google button red' onClick={this.onSignOutClick}>
                    <i className='google icon'/>
                    Sign Out
                </div>
            );
        } else return null;
    }

    render() {
        return (
            <div>
                {this.renderLoginButton(this.props.isSignedIn)}
            </div>
        );
    }
}

// Convert redux state, which will be injected as props in this component
const makeStateToProps = (state) => ({isSignedIn: state.auth.isSignedIn});

// connect to redux and get actions
export default connect(makeStateToProps, {signIn, signOut})(GoogleAuth);