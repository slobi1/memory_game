import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import * as pageRouteConstants from '../constants/pageRoutesContants';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class App extends Component {
  render() {
    return (
      <div>
        <AppBar position="static" color="default" className='appBar'>
          <Toolbar>
            <Typography variant="title" color="inherit">
              Memory Game
            </Typography>
            <Button variant="outlined" color="primary">
              <Link to={pageRouteConstants.MEMORY_GAME_PAGE}>Memory Game</Link>
            </Button>
            <Button variant="outlined" color="primary">
              <Link to={pageRouteConstants.HIGH_SCORES_PAGE}>High Scores</Link>
            </Button>
          </Toolbar>
        </AppBar>
        {this.props.children}
      </div>
    );
  }
}

export default App;
