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
    this.props.gameSettingsActions.resetBoard(this.props.gameSettings.complexity.pairs);
  }

  changeDifficulty = (event) => {
    this.props.gameSettingsActions.getMatrix(event.target.value);
  }

  render() {
    return (
      <div className="App">
        <Matrix
          handleClick={this.props.flipCardActions.flipCard}
          board={this.props.gameSettings.complexity.matrix.board}
          matrix={{x: this.props.gameSettings.complexity.matrix.x, y: this.props.gameSettings.complexity.matrix.y}}
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
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    gameSettings: state.GameSettingsReducer,
    gameScore: state.GameScoreReducer
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