import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LoginForm from './login-form';
import RandomCardOne from './randomCardOne';
import RandomCardTwo from './randomCardTwo';
import './styles/landing-page.css';
import './styles/float-grid.css';

export function LandingPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <section className="home">
      <h2>Welcome to Deckbuilder!</h2>
      <h4>Create an account to save your favorite</h4>
      <h4>Hearthstone decks!</h4>
      <section className="container row">
        <section className="col-4">
          <RandomCardOne  />
        </section>
        <section className="col-4">
          <LoginForm />
        </section>
        <section className="col-4">
          <RandomCardTwo  />
        </section>
      </section>
    </section>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);