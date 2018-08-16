import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import RandomCard from './randomCard';
import DeckForm from './deck-form';
import DeckList from './deck-list';

export function Dashboard(props) {
  return (
    <div className="dashboard">
        <DeckForm />
        <div className="cards">
        <RandomCard />
        <DeckList />
        </div>
    </div>
  );
}

const mapStateToProps = state => ({
  username: state.auth.currentUser.username
});

export default requiresLogin()(connect(mapStateToProps)(Dashboard));