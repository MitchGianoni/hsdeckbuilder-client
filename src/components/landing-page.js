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
      <section className="intro row">
        <h2 className="col-12">Welcome to Deckbuilder!</h2>
        <h4 className="col-12">Hearthstone, originally Hearthstone: Heroes of Warcraft, is a free-to-play online collectible card video game developed and published by Blizzard Entertainment. 
        Create an account to save your favorite Hearthstone decks!</h4>
        <h4 className="col-6">Demo User: demo123</h4>
        <h4 className="col-6">Demo Pass: password1</h4>
      </section>
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