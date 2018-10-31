import React, { Component } from 'react';
//import { fetchRandomCard } from '../actions/cards';

export default class StaticLeeroy extends Component {
  render() {
    return <section>
      <img className="leeroy" id="leeroy" src={`https://art.hearthstonejson.com/v1/render/latest/enUS/256x/EX1_116.png`}
        alt="Leeroy Jenkins" title="Leeroy Jenkins"/>
    </section>;
  }
}
