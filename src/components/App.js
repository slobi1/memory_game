import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import * as pageRouteConstants from '../constants/pageRoutesContants';


class App extends Component {
  render() {
    return (
      <div>
        <h1>Memory Game</h1>
        <ul>
          <li><Link to={pageRouteConstants.MEMORY_GAME_PAGE}>Memory Game</Link></li>
          <li><Link to={pageRouteConstants.HIGH_SCORES_PAGE}>High Scores</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default App;
