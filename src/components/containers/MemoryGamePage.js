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
import Select from '../SelectComponent';
import Matrix from '../MatrixComponent';
import SaveScoreDialogComponent from '../SaveScoreDialogComponent';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export class MemoryGamePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dialogOpened: false,
      dialogTitle: '',
      dialogText: ''
    }
  }

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
          this.setState({
            dialogOpened: true,
            dialogTitle: 'Congratulations!',
            dialogText: `You won. Your score is ${this.props.gameScore}. Enter your name to save your score.`
          });
        } else {
          this.setState({
            dialogOpened: true,
            dialogTitle: 'You lost :('
          });
        }
      });
    }
  }

  resetBoard = () => {
    this.props.enableGameActions.disableGame();
    this.props.boardActions.resetBoard(this.props.complexity.pairs, this.props.complexity.matrix.x);
    this.props.gameScoreActions.resetScore();
    setTimeout(() => {
      this.props.gameSettingsActions.hideAll();
      this.props.enableGameActions.enableGame();
    }, 1000)
  }

  changeDifficulty = (event) => {
    this.props.complexityActions.getPairs(event.target.value);
    this.props.complexityActions.getMatrix(event.target.value);
  }

  handleCloseDialog = () => {
    this.setState({ dialogOpened: false });
  };

  render() {
    return (
      <div className="App">
        <SaveScoreDialogComponent
          handleClose={this.handleCloseDialog}
          title={this.state.dialogTitle}
          message={this.state.dialogText}
          dialogOpened={this.state.dialogOpened}
          gameScore={this.props.gameScore}
        />
        <Grid container spacing={16}>
          <Grid item lg={6} md={8} sm={8}>
            <Matrix
              enableGame={this.props.enableGame}
              handleClick={this.props.flipCardActions.flipCard}
              board={this.props.board}
              cardsFlipped={this.props.gameSettings.values.length}
            />
          </Grid>
          <Grid item lg={2} md={4} sm={4}>
            <Button onClick={() => this.resetBoard()} variant="outlined" color="primary">
              Start game
            </Button>
            <h1>
              Score: {this.props.gameScore}
            </h1>
            <Select
              options={[6, 8, 10]}
              value={this.props.complexity.pairs}
              handleChange={this.changeDifficulty}
              title={'Game difficulty'}
            />
          </Grid>
        </Grid>
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
  gameScore: PropTypes.number.isRequired,
  complexity: PropTypes.object.isRequired,
  enableGame: PropTypes.bool.isRequired,
  board: PropTypes.array.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MemoryGamePage);