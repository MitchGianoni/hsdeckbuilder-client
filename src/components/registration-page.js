import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import RegistrationForm from './registration-form';
import RandomCardOne from './randomCardOne';
import RandomCardTwo from './randomCardTwo';

export function RegistrationPage(props) {
  // If we are logged in (which happens automatically when 
  // registration is successful) redirect to the user's dashboard
  if (props.loggedIn ) {
    return <Redirect to="/dashboard" />;
  } 
  return (
    <section className="home">
      <h2>Register to begin building decks!</h2>
      <section className="container row">
        <section className="col-4">
          <RandomCardOne  />
        </section>
        <section className="col-4">
          <RegistrationForm />
        </section>
        <section className="col-4">
          <RandomCardTwo  />
        </section>
      </section>
    </section>);
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);