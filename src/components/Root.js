import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './App';
import MemoryGamePage from './containers/MemoryGamePage';
import HighScorePage from './containers/HighScorePage';
import NotFoundPage from './containers/NotFoundPage';
import * as pageRouteConstants from '../constants/pageRoutesContants';


export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <BrowserRouter>
          <App>
            <Switch>
              <Route path={pageRouteConstants.MEMORY_GAME_PAGE} component={MemoryGamePage} />
              <Route path={pageRouteConstants.HIGH_SCORES_PAGE} component={HighScorePage} />
              <Route path="*" component={NotFoundPage} />
            </Switch>
          </App>
        </BrowserRouter>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
};
