import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../utils/local-storage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as brandIcons from '@fortawesome/free-brands-svg-icons';
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
        <section className="col-6 route">
          <a href="https://github.com/MitchGianoni/hsdeckbuilder-client" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={brandIcons.faGithub} className="icon" alt="GitHub" title="GitHub" />
          </a>
        </section>
        <section className="col-6">{logOutButton}</section>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Footer);