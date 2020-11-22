import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: "0px",
      padding: "0px",
      height: "14px"
    }
  }
}));

export default function AlertDialog(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleContinue = () => {
    setOpen(false);
  };

  return (
    <span>
      <Button
        style={{ textTransform: "none" }}
        className={classes.root}
        onClick={handleClickOpen}
      >
        <strong style={{ color: "blue" }}>{props.content}</strong>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"You are about to leave this site"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            The link is a great resource - but don't forget, you're welcome to
            stop back here any time!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Stay Here
          </Button>
          <Button
            href={props.href}
            onClick={handleContinue}
            color="primary"
            autoFocus
          >
            Continue
          </Button>
        </DialogActions>
      </Dialog>
    </span>
  );
}
