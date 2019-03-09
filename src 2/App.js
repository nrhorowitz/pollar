import React, { Component } from 'react';

import firebase, {googleProvider} from './firebase.js';

import LoginView from './LoginView.js';
import DashboardView from './DashboardView.js';
import EditPollView from './EditPollView.js';
import VotePollView from './VotePollView.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentView: 0,
      currentUser: null
    };

    this.segueToLoginView = this.segueToLoginView.bind(this);
    this.segueToDashboardView = this.segueToDashboardView.bind(this);
    this.signInWithGoogle = this.signInWithGoogle.bind(this);
  }

  componentDidMount() {

  }

  signInWithGoogle = () => {
    if(firebase.auth().currentUser) {
      console.log('Already Logged In');
      this.segueToDashboardView();
    } else {
      console.log("Logging in to Firebase");
      firebase.auth().signInWithPopup(googleProvider).then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        //var user = result.user;

        console.log("Seguing to DashboardView");
        this.segueToDashboardView();
        console.log("Logged In");
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;

        console.log(error);
      });
    }
  }

  signOut = () => {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
  }

  segueToLoginView() {
    this.setState({currentView: 0});
  }

  segueToDashboardView() {
    this.setState({currentView: 1});
  }

  currentPage() {
    if(this.state.currentView === 0) {
      return(
        <LoginView
          signInWithGoogle = {this.signInWithGoogle}
          segueToDashboardView = {this.segueToDashboardView}
        />
      )
    } else if(this.state.currentView === 1) {
      return(
        <DashboardView
          segueToLoginView = {this.segueToLoginView}
        />
      )
    } else if(this.state.currentView === 2) {
      return(
        <EditPollView/>
      )
    } else if(this.state.currentView === 3) {
      return(
        <VotePollView/>
      )
    }
  }

  render() {
    return (
      <div>
        {this.currentPage()}
      </div>
    );
  }
}

export default App;
