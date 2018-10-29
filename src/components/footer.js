import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../utils/local-storage';
import { Link } from 'react-router-dom';
import './styles/footer.css';
import './styles/float-grid.css';

export class Footer extends React.Component {
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
      <section className="footer row">
        <section className="route col-4">{dashboardButton}</section>
        <section className="col-4">{logOutButton}</section>
        <section className="route col-4">{deckbuilder}</section>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Footer);