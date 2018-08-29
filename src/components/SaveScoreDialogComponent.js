import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class SaveScoreDialogComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ''
    }
  }

  handleInputUpdate = (event) => {
    this.setState({
      inputValue: event.target.value
    });
  }

  handleSave = () => {
    localStorage.setItem(this.state.inputValue, this.props.gameScore);
    this.props.handleClose();
  }

  render() {
    return (
      <Dialog
        open={this.props.dialogOpened}
        onClose={this.props.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          {this.props.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Your score is {this.props.gameScore}. Enter your name to save your score.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Your name"
            fullWidth
            value={this.state.inputValue}
            onChange={this.handleInputUpdate}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleClose} color="primary">
            Close
          </Button>
          <Button onClick={this.handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

export default SaveScoreDialogComponent;