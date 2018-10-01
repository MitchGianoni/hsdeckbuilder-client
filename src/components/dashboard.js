import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import RandomCard from './randomCard';
import DeckForm from './deck-form';
import DeckList from './deck-list';
import { Link } from 'react-router-dom';
import './dashboard.css';

export function Dashboard(props) {
  return (
    <div className="dashboard">
      <div className="grid-container">
        <div className="warrior deck-form"><DeckForm /></div>
        <DeckList className="deck-list"/>
        <div className="demonhunter random-card"><RandomCard /></div>
      </div>
      <Link to="/deckbuilder">Deckbuilder</Link>
    </div>
  );
}

const mapStateToProps = state => ({
  username: state.auth.currentUser.username
});

export default requiresLogin()(connect(mapStateToProps)(Dashboard));