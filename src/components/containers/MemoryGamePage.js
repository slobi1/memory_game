import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as flipCardActions from '../../actions/FlipCardActions';
import * as gameSettingsActions from '../../actions/GameSettingsActions';

import Card from '../Card';
import Select from '../Select';

export class MemoryGamePage extends React.Component {
  changeDifficulty = (event) => {
    this.props.gameSettingsActions.getMatrix(event.target.value);
  }

  render() {
    return (
      <div className="App">
        <ul className="gridList">
          <Card symbol={'A'} handleClick={this.props.flipCardActions.incrementFlippedCards}/>
          <Card symbol={'A'} handleClick={this.props.flipCardActions.incrementFlippedCards}/>
          <Card symbol={'B'} flipped={true} handleClick={this.props.flipCardActions.incrementFlippedCards}/>
          <Card symbol={'B'} handleClick={this.props.flipCardActions.incrementFlippedCards}/>
        </ul>
        <ul className="gridList">
          <Card symbol={'C'} handleClick={this.props.flipCardActions.incrementFlippedCards}/>
          <Card symbol={'C'} handleClick={this.props.flipCardActions.incrementFlippedCards}/>
          <Card symbol={'D'} handleClick={this.props.flipCardActions.incrementFlippedCards}/>
          <Card symbol={'D'} handleClick={this.props.flipCardActions.incrementFlippedCards}/>
        </ul>
        <ul className="gridList">
          <Card symbol={'E'} handleClick={this.props.flipCardActions.incrementFlippedCards}/>
          <Card symbol={'E'} handleClick={this.props.flipCardActions.incrementFlippedCards}/>
          <Card symbol={'F'} handleClick={this.props.flipCardActions.incrementFlippedCards}/>
          <Card symbol={'F'} handleClick={this.props.flipCardActions.incrementFlippedCards}/>
        </ul>
        <Select options={[6, 8, 10]} handleChange={this.changeDifficulty} title={'Game difficulty'}/>
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
    cardsFlipped: state.FlipCardReducer,
    gameDifficulty: state.GameSettingsReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    flipCardActions: bindActionCreators(flipCardActions, dispatch),
    gameSettingsActions: bindActionCreators(gameSettingsActions, dispatch)
  };
}

MemoryGamePage.propTypes = {
  flipCardActions: PropTypes.object.isRequired,
  gameSettingsActions: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MemoryGamePage);