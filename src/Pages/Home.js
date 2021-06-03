import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import logo_nobackgorund from "./../static/Logo/logo_noback.png";
import DialogRecuperarContraseña from "../Components/Genericos/Dialogs/DialogRecuperarContraseña";
import "../Styles/Home.scss";

const llamadaBack = () => {
  return {
    auth: true,
    token: "hgBJHB JKuytvBHJYGVUHJVGJ%$&/(7676457687re",
    rol: "paciente",
  };
};
const Home = (props) => {
  //const classes = useStyles();
  const [usuario, setUsuario] = useState({ email: "", password: "" });
  const [openDialog, setOpenDialog] = useState(false);
  /*  
      const [email, setEmail] = useState(   ""     );
      const [password, setPassword] = useState(   ""    );
  */

  const ingresoDeCorreooo = (event) => {
    //setEmail(event.target.value);

    setUsuario({
      ...usuario,
      ...{ email: event.target.value },
    });
    console.log("login");
  };
  const handleChangePassword = (event) => {
    setUsuario({ ...usuario, ...{ password: event.target.value } });
  };
  useEffect(() => {
    console.log("==>", props.history);
    /*  document.body.classList.add("account-page");
    return document.body.classList.remove("account-page"); */
  });
  function handleOpenDialog() {
    setOpenDialog(true);
  }
  function handleCloseDialog() {
    setOpenDialog(false);
  }
  const iniciarSesion = async (props) => {
    //llamada añl back
    alert("Inicio de sesión correcto");
    const response = await llamadaBack(usuario);
    if (response.auth) {
      const rol = response.rol;
      //props.history.push(`/${rol}`);
      window.location.replace(`/${rol}`);
    }
    //props.history.push("/paciente");
  };
  return (
    <div className="login container">
      <div className="form">
        <img src={logo_nobackgorund} alt="logo-serenity-login" />

        <TextField
          fullWidth
          style={{ margin: "4% 2%" }}
          id="outlined-password-input"
          label="Correo"
          autoComplete="current-password"
          variant="outlined"
          onChange={ingresoDeCorreooo}
        />

        <TextField
          fullWidth
          style={{ margin: "4% 2%" }}
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          onChange={handleChangePassword}
        />

        <button
          className="anchor"
          style={{ alignSelf: "flex-end" }}
          onClick={handleOpenDialog}
        >
          Recuperar contraseña
        </button>
        <Button
          style={{ margin: "4% 2%" }}
          color="primary"
          variant="contained"
          fullWidth
          onClick={iniciarSesion}
        >
          Iniciar Sesion
        </Button>
      </div>
      <DialogRecuperarContraseña
        open={openDialog}
        onCloseDialog={handleCloseDialog}
      />
    </div>
  );
};

export default Home;
