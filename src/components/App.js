import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom'; 
import HeaderBar from './header-bar';
import Footer from './footer';
import LandingPage from './landing-page';
import Dashboard from './dashboard';
import Deckbuilder from './deckbuilder';
import RegistrationPage from './registration-page';
import { refreshAuthToken } from '../actions/auth';
import './styles/App.css';
import './styles/float-grid.css';

export class App extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      // When we are logged in, refresh the auth token periodically
      this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
      // Stop refreshing when we log out
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000 // One hour
    );
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }
    clearInterval(this.refreshInterval);
  }

  render() {
    return (
      <div className ="App">
        <header className="row">
          <HeaderBar />
        </header>
        <main className="row">
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/deckbuilder" component={Deckbuilder} />
          <Route exact path="/register" component={RegistrationPage} />
        </main>
        <footer className="row">
          <Footer />
        </footer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

// Deal with update blocking
export default withRouter(connect(mapStateToProps)(App));
