import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Pages/Home";
import mainTheme from "./themes/mainTheme";
import EntidadPrimariaMainPage from "./Pages/EntidadPrimaria/EntidadPrimariaMainPage";
import EntidadProveedoraMainPage from "./Pages/EntidadProveedora/EntidadProveedoraMainPage";
import PacienteMainPage from "./Pages/Paciente/PacienteMainPage";
import PsicologoMainPage from "./Pages/Psicologo/PsicologoMainPage";
import { Navegacion } from "./Components/Navegacion/Navegacion";
function MainApp(props) {
  return (
    <ThemeProvider theme={mainTheme}>
      <BrowserRouter>
        <Route
          exact
          path="/"
          component={(props) => <Home {...props} navegacion={Navegacion("Login")} />}
        />
        <Route
          path="/entidad-primaria"
          component={(props) => (
            <EntidadPrimariaMainPage
              {...props}
              navegacion={Navegacion("EntidadPrimaria")}
            />
          )}
        />
        <Route
          path="/entidad-proveedora"
          component={(props) => (
            <EntidadProveedoraMainPage
              {...props}
              navegacion={Navegacion("EntidadProveedora")}
            />
          )}
        />
        <Route
          path="/paciente"
          component={(props) => (
            <PacienteMainPage {...props} navegacion={Navegacion("Paciente")} />
          )}
        />
        <Route
          exact
          path="/psicologo"
          component={(props) => (
            <PsicologoMainPage
              {...props}
              navegacion={Navegacion("Psicologo")}
            />
          )}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default MainApp;
