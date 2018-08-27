import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as flipCardActions from '../../actions/FlipCardActions';
import * as gameSettingsActions from '../../actions/GameSettingsActions';
import * as gameScoreActions from '../../actions/GameScoreActions';

import Select from '../Select';
import Matrix from '../Matrix';

export class MemoryGamePage extends React.Component {
  constructor(props) {
    super(props);

    this.resetGame = this.resetGame.bind(this);
  }

  componentDidMount() {
    this.resetGame();
  }

  resetGame() {
    this.props.gameSettingsActions.setBoard(this.props.gameDifficulty.pairs);
  }

  changeDifficulty = (event) => {
    this.props.gameSettingsActions.getMatrix(event.target.value);
  }

  render() {
    return (
      <div className="App">
        <Matrix
          handleClick={this.props.flipCardActions.incrementFlippedCards}
          board={this.props.gameDifficulty.matrix.board}
          matrix={{x: this.props.gameDifficulty.matrix.x, y: this.props.gameDifficulty.matrix.y}}
        />
        <Select
          options={[6, 8, 10]}
          handleChange={this.changeDifficulty}
          title={'Game difficulty'}
        />
        <button onClick={this.resetGame}>
          Start new game
        </button>
        <p>
          Your score is: {this.props.gameScore}
        </p>
        <p>
          Cards flipped {this.props.cardsFlippedCount}
        </p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cardsFlippedCount: state.FlipCardReducer,
    gameDifficulty: state.GameSettingsReducer,
    gameScore: state.GameScoreReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    flipCardActions: bindActionCreators(flipCardActions, dispatch),
    gameSettingsActions: bindActionCreators(gameSettingsActions, dispatch),
    gameScoreActions: bindActionCreators(gameScoreActions, dispatch)
  };
}

MemoryGamePage.propTypes = {
  flipCardActions: PropTypes.object.isRequired,
  gameSettingsActions: PropTypes.object.isRequired,
  gameScoreActions: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MemoryGamePage);