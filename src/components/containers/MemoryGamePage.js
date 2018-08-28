import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as flipCardActions from '../../actions/FlipCardActions';
import * as gameSettingsActions from '../../actions/GameSettingsActions';
import * as gameScoreActions from '../../actions/GameScoreActions';
import * as complexityActions from '../../actions/ComplexityActions';
import * as enableGameActions from '../../actions/EnableGameActions';
import * as boardActions from '../../actions/BoardActions';
import Select from '../Select';
import Matrix from '../Matrix';

export class MemoryGamePage extends React.Component {
  componentDidMount() {
    this.resetBoard();
  }

  componentWillUpdate(nextProps) {
    if(nextProps.gameSettings.values.length >= 2) {
      setTimeout(() => {
        this.props.flipCardActions.flipBack(this.props.gameSettings.locations);
      }, 500);
    }

    if (nextProps.gameSettings.matched) {
      this.props.boardActions.setCardToResolved(this.props.gameSettings.locations);
      this.props.gameScoreActions.updateScore(10);
    } else if (nextProps.gameSettings.matched === false){
      this.props.gameScoreActions.updateScore(-2);
    }

    if (nextProps.gameSettings.resolved.length === this.props.complexity.pairs && nextProps.gameScore !== this.props.gameScore) {
      setTimeout(() => {
        if (nextProps.gameScore >= 0) {
          alert('you won');
        } else {
          alert('you lost');
        }
      });
    }
  }

  resetBoard = () => {
    this.props.enableGameActions.disableGame();
    this.props.boardActions.resetBoard(this.props.complexity.pairs, this.props.gameSettings.complexity.matrix.x);
    this.props.gameScoreActions.resetScore();
    setTimeout(() => {
      this.props.gameSettingsActions.hideAll();
      this.props.enableGameActions.enableGame();
    }, 1500)
  }

  changeDifficulty = (event) => {
    this.props.complexityActions.getPairs(event.target.value);
    this.props.complexityActions.getMatrix(event.target.value);
  }

  render() {
    return (
      <div className="App">
        <Matrix
          enableGame={this.props.enableGame}
          handleClick={this.props.flipCardActions.flipCard}
          board={this.props.board}
          cardsFlipped={this.props.gameSettings.values.length}
        />
        <Select
          options={[6, 8, 10]}
          handleChange={this.changeDifficulty}
          title={'Game difficulty'}
        />
        <button onClick={() => this.resetBoard()}>
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
  return {
    gameSettings: state.GameSettingsReducer,
    gameScore: state.GameScoreReducer,
    complexity: state.ComplexityReducer,
    enableGame: state.EnableGameReducer,
    board: state.BoardReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    flipCardActions: bindActionCreators(flipCardActions, dispatch),
    gameSettingsActions: bindActionCreators(gameSettingsActions, dispatch),
    gameScoreActions: bindActionCreators(gameScoreActions, dispatch),
    complexityActions: bindActionCreators(complexityActions, dispatch),
    enableGameActions: bindActionCreators(enableGameActions, dispatch),
    boardActions: bindActionCreators(boardActions, dispatch)
  };
}

MemoryGamePage.propTypes = {
  flipCardActions: PropTypes.object.isRequired,
  gameSettingsActions: PropTypes.object.isRequired,
  gameScoreActions: PropTypes.object.isRequired,
  gameScore: PropTypes.string.isRequired,
  complexity: PropTypes.object.isRequired,
  enableGame: PropTypes.bool.isRequired,
  board: PropTypes.array.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MemoryGamePage);