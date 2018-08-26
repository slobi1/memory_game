import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../../actions/FlipCardActions';

import Card from '../Card';

export class MemoryGamePage extends React.Component {
  render() {
    return (
      <div className="App">
        <ul className="gridList">
          <Card symbol={'A'} handleClick={this.props.actions.incrementFlippedCards}/>
          <Card symbol={'A'} handleClick={this.props.actions.incrementFlippedCards}/>
          <Card symbol={'B'} flipped={true} handleClick={this.props.actions.incrementFlippedCards}/>
          <Card symbol={'B'} handleClick={this.props.actions.incrementFlippedCards}/>
        </ul>
        <ul className="gridList">
          <Card symbol={'C'} handleClick={this.props.actions.incrementFlippedCards}/>
          <Card symbol={'C'} handleClick={this.props.actions.incrementFlippedCards}/>
          <Card symbol={'D'} handleClick={this.props.actions.incrementFlippedCards}/>
          <Card symbol={'D'} handleClick={this.props.actions.incrementFlippedCards}/>
        </ul>
        <ul className="gridList">
          <Card symbol={'E'} handleClick={this.props.actions.incrementFlippedCards}/>
          <Card symbol={'E'} handleClick={this.props.actions.incrementFlippedCards}/>
          <Card symbol={'F'} handleClick={this.props.actions.incrementFlippedCards}/>
          <Card symbol={'F'} handleClick={this.props.actions.incrementFlippedCards}/>
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
        <p>
          Cards flipped {this.props.cardsFlipped}
        </p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cardsFlipped: state.FlipCardReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

MemoryGamePage.propTypes = {
  actions: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MemoryGamePage);