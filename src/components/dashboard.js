import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import RandomCard from './randomCard';

export function Dashboard(props) {
  return (
    <div className="dashboard">
      <div className="dashboard-username">
        Username: {props.username}
      </div>
      <div className="dashboard-randomcard">
        <RandomCard />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  username: state.auth.currentUser.username
});

export default requiresLogin()(connect(mapStateToProps)(Dashboard));