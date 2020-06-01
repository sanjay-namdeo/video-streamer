import React, {Component} from 'react';

const API_KEY = '';

class GoogleAuth extends Component {
    state = {isSignedIn: null};

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                'clientId': API_KEY,
                'scope': 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn: this.auth.isSignedIn.get()});
                this.auth.isSignedIn.listen(this.handleAuthChange);
            })
        })
    }

    handleAuthChange = (isSignedIn) => {
        this.setState({isSignedIn});
    }

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

    onSignInClick = () => this.auth.signIn();
    onSignOutClick = () => this.auth.signOut();

    render() {
        return (
            <div>
                {this.renderLoginButton(this.state.isSignedIn)}
            </div>
        );
    }
}

export default GoogleAuth;