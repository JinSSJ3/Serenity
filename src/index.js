import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import MainApp from './MainApp';
import * as dotenv from "dotenv";
import {
  EstadoInicialUser,
  EstadoInicialDialog,
  EstadoInicialMultiDialog,
  EstadoInicialBackDrop,
} from "./redux/estadoInicial";
import { UserProvider } from "./redux/Sesion";
import sesionReducer from "./redux/reducers/sesionReducer";
import { MultiDialogProviderSSJ } from "./redux/multidialog";
import { DialogProviderSSJ } from "./redux/dialog";
import openDialogReducer from "./redux/reducers/openDialogReducer";
import openMultiDialogReducer from "./redux/reducers/openMultiDialogReducer";
import { BackDropProvider } from "./redux/backdrop";
import openBackDropReducer from "./redux/reducers/openBackDropReducer";
import axios from "axios";

dotenv.config();
//Definimos la base URL
axios.defaults.baseURL=process.env.REACT_APP_MAIN_SERVER;

ReactDOM.render(
  <React.StrictMode>
    
    <UserProvider initialState={EstadoInicialUser} reducer={sesionReducer}>
        <DialogProviderSSJ
          initialState={EstadoInicialDialog}
          reducer={openDialogReducer}
        >
          <MultiDialogProviderSSJ
            initialState={EstadoInicialMultiDialog}
            reducer={openMultiDialogReducer}
          >
            <BackDropProvider
              initialState={EstadoInicialBackDrop}
              reducer={openBackDropReducer}
            >
              <MainApp />
            </BackDropProvider>
          </MultiDialogProviderSSJ>
        </DialogProviderSSJ>
      </UserProvider>
    
  </React.StrictMode>,
  document.getElementById('serenity-web')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
