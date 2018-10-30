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
    let dashboardButton, deckbuilder;
    if (this.props.loggedIn) {
      dashboardButton = (
        <Link to="/dashboard">Dashboard</Link>
      );
      deckbuilder = (
        <Link to="/deckbuilder">Deckbuilder</Link>
      ); 
    }
    return (
      <section id="header" className="header-bar row">
        <section className="label row">
          <p className="col-4 invis">_</p>
          <h1 className="title col-4">Deckbuilder</h1>
          <p className="col-4 invis">_</p>
        </section>
        <section className="nav row">
          <section className="col-4">{dashboardButton}</section>
          <section className="col-4 invis">_</section>
          <section className="col-4">{deckbuilder}</section>
        </section>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);