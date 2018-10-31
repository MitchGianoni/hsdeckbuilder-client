import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import LeeroyCard from './leeroyCard';
import DeckForm from './deck-form';
import DeckList from './deck-list';
import './styles/dashboard.css';
import './styles/float-grid.css';

export function Dashboard(props) {
  return (
    <section className="dashboard row">
      <section className="col-6">
        <DeckList />
      </section>
      <section className="col-6">
        <DeckForm />
      </section>
    </section>
  );
}

const mapStateToProps = state => ({
  username: state.auth.currentUser.username
});

export default requiresLogin()(connect(mapStateToProps)(Dashboard));

//<DeckList className="deck-list"/>