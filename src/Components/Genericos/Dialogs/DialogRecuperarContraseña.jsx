import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { TextField } from "@material-ui/core";
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

function DialogRecuperarContraseña(props) {
  const { open } = props;
  /* const handleClickOpen = () => {
    // setOpen(true);
  }; */

  const handleClose = () => {
    // setOpen(false);
    if (props.onCloseDialog) {
      props.onCloseDialog();
    }
  };
  const handleSave = () => {
    //llamada al back

    alert("correo enviado");
    handleClose();
  };
  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <h5> ¿Olvido su contraseña? </h5>
          {" Ingrese su correo electrónico para recuperar su contraseña"}
        </DialogTitle>
        <DialogContent dividers>
          <div>Correo:</div>
          <br />
          <TextField
            fullWidth
            // style={{ margin: "4% 2%" }}
            id="outlined-password-input"
            label="Ingrese su correo"
            autoComplete="current-password"
            variant="outlined"
            onChange={() => {}}
          />
        </DialogContent>

        <DialogActions>
          <Button
            autoFocus
            onClick={handleClose}
            variant="outlined"
            color="primary"
          >
            calcelar
          </Button>
          <Button
            autoFocus
            onClick={handleSave}
            variant="contained"
            color="primary"
          >
            Enviar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DialogRecuperarContraseña;
