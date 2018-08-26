import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul className="gridList">
          <li>
            A
          </li>
          <li>
            A
          </li>
          <li className="flipped">
            B
          </li>
          <li>
            B
          </li>
        </ul>
        <ul className="gridList">
          <li>
            C
          </li>
          <li>
            C
          </li>
          <li>
            D
          </li>
          <li>
            D
          </li>
        </ul>
        <ul className="gridList">
          <li>
            E
          </li>
          <li>
            E
          </li>
          <li>
            F
          </li>
          <li>
            F
          </li>
        </ul>
        <label htmlFor="difficulty">Set difficulty</label>
        <select name="difficulty" id="difficulty">
          <option value="6">6 pairs</option>
          <option value="8">8 pairs</option>
          <option value="12">12 pairs</option>
        </select>
        <button>
          Reset game
        </button>
        <p>
          Your score is: 0
        </p>
      </div>
    );
  }
}

export default App;
