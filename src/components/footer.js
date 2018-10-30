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
    let logOutButton;
    if (this.props.loggedIn) {
      logOutButton = (
        <button onClick={() => this.logOut()}>Log Out</button>
      );
    } else {
      logOutButton = (<p className="invis">_</p>);
    }
    return (
      <section className="footer row">
        <section className="col-12">{logOutButton}</section>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Footer);