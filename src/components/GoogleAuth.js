import React, {Component} from 'react';

const API_KEY = '';

class GoogleAuth extends Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                'clientId': API_KEY,
                'scope': 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                console.log(this.auth);
            })
        })

    }

    render() {
        return (
            <div className='ui google button red'>
                <i  className='google icon'/>
                Sign In
            </div>
        );
    }
}

export default GoogleAuth;