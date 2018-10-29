import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../utils/local-storage';
import { Link } from 'react-router-dom';
import './styles/header-bar.css';
import './styles/float-grid.css';

export class HeaderBar extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    // Only render the log out button if we are logged in!
    let logOutButton, dashboardButton, deckbuilder;
    if (this.props.loggedIn) {
      dashboardButton = (
        <Link to="/dashboard">Dashboard</Link>
      );
      deckbuilder = (
        <Link className="deckbuilder" to="/deckbuilder">Deckbuilder</Link>
      ); 
      logOutButton = (
        <button onClick={() => this.logOut()}>Log Out</button>
      );
    }
    return (
      <section className="header-bar row">
        <section className="label row">
          <p className="col-4 invis">_</p>
          <h1 className="title col-4">Deckbuilder</h1>
          <p className="col-4 invis">_</p>
        </section>
        <section className="col-4">{dashboardButton}</section>
        <section className="col-4">{logOutButton}</section>
        <section className="col-4">{deckbuilder}</section>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);