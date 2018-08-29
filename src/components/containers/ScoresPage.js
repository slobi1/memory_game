import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as scoreActions from "../../actions/FetchActions";
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CircularProgress from '@material-ui/core/CircularProgress';
import {v4} from 'uuid';

export class HighScorePage extends React.Component {
  componentDidMount() {
    this.props.fetchActions.fetchStart();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loading) {
      this.props.fetchActions.fetchSuccess(JSON.parse(localStorage.getItem('scores')));
    }
  }

  render() {
    return (
      <div className="App">
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <h2>Score table</h2>
            <Divider light />
          </Grid>
          <Grid xs={4} item></Grid>
          <Grid xs={4} item>
            {this.props.loading ? (
              <div>
                <CircularProgress size={50} />
              </div>
              ) : (
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      Name
                    </TableCell>
                    <TableCell numeric>
                      Score
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    this.props.scores.map((score) => {
                      return (
                        <TableRow key={v4()}>
                          <TableCell>
                            {score.name}
                          </TableCell>
                          <TableCell numeric>
                            {score.score}
                          </TableCell>
                        </TableRow>
                      )
                    })
                  }
                </TableBody>
              </Table>
            )}
          </Grid>
        </Grid>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    loading: state.FetchReducer,
    scores: state.ScoresReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchActions: bindActionCreators(scoreActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HighScorePage);