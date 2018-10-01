import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../utils/local-storage';
import { Link } from 'react-router-dom';
import './header-bar.css';

export class HeaderBar extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    // Only render the log out button if we are logged in!
    let logOutButton;
    if (this.props.loggedIn) {
      logOutButton = (
        <button onClick={() => this.logOut()}>Log Out</button>
      );
    }
    return (
      <div className="header-bar">
        <h1>DECKBUILDER</h1>
        <Link to="/dashboard">Dashboard</Link>
        {logOutButton}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);