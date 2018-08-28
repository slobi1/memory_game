import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const SaveScoreDialogComponent = (props) => {
  return (
    <Dialog
      open={props.dialogOpened}
      onClose={props.handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">
        {props.title}
      </DialogTitle>
      <DialogContent>
      <DialogContentText>
        {props.message}
      </DialogContentText>
      {
        props.gameScore > 0 ? (
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Your name"
            fullWidth
          />
        ) : ('')
      }
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          Close
        </Button>
        {
          props.gameScore > 0 ? (
            <Button onClick={props.handleClose} color="primary">
              Save
            </Button>
          ) : ('')
        }
      </DialogActions>
    </Dialog>
  )
}

export default SaveScoreDialogComponent;