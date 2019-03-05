import React, { Component } from 'react';

import firebase, {googleProvider} from './firebase.js';

import LoginView from './LoginView.js';
import DashboardView from './DashboardView.js';
import EditPollView from './EditPollView.js';
import VotePollView from './VotePollView.js';
import CreateNewPollView from './CreateNewPollView.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentView: 1,
      currentUser: null
    };

    this.segueToLoginView = this.segueToLoginView.bind(this);
    this.segueToDashboardView = this.segueToDashboardView.bind(this);
  }

  componentDidMount() {

  }

  segueToLoginView() {
    this.setState({currentView: 0});
  }

  segueToDashboardView() {
    this.setState({currentView: 1});
  }

  segueToCreateNewPollView() {
    //this.setState({currentView: 4});
    this.state.currentView = 4;
  }

  currentPage() {
    if (this.state.currentView === 0) {
      return(
        <LoginView
          segueToDashboardView = {this.segueToDashboardView}
        />
      )
    } else if (this.state.currentView === 1) {
      return(
        <DashboardView
          segueToLoginView = {this.segueToLoginView}
          segueToCreateNewPollView = {this.segueToCreateNewPollView}
          currentView = {this.state.currentView}
        />
      )
    } else if (this.state.currentView === 2) {
      return(
        <EditPollView/>
      )
    } else if (this.state.currentView === 3) {
      return(
        <VotePollView/>
      )
    } else if (this.state.currentView === 4) {
      return(
        <CreateNewPollView/>
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
