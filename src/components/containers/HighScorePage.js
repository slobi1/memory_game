import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as highScoreActions from "../../actions/HighScoreActions";

export class HighScorePage extends React.Component {
  componentDidMount() {
    this.props.highScoreActions.fetchScores();
    this.props.highScoreActions.addScore({bob: 10});
  }

  render() {
    return (
      <div>
        High score page
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    gameSettings: state.HighScoreReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    highScoreActions: bindActionCreators(highScoreActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HighScorePage);