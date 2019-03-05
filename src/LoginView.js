import React from 'react';

import firebase from './firebase.js';

import './LoginView.css';

import googleButton from './btn_google_light_normal_ios.svg';

class LoginView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

  }

  componentWillMount() {
    if(firebase.auth().currentUser) {
      console.log('Already Signed In, Seguing to DashboardView');
      this.props.segueToDashboardView();
    }
  }

  render() {
    return(
      <div>
        LoginView
        <button onClick={this.props.signInWithGoogle}>
          <img src={googleButton}/>
          Sign in with Google
        </button>
      </div>
    )
  }
}

export default LoginView;
