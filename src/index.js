import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
// import * as serviceWorker from './serviceWorker';
import { theme } from "loft-taxi-mui-theme"; // Импортируем саму тему
import { MuiThemeProvider } from "@material-ui/core/styles";
import { LoginProvider } from './Context/authorization';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
// import userFetchingMiddleware from './Middlewares';
// import userFetchingRegistrMiddleware from './Middlewares/userFetchingRegistrMiddleware';
// import cardFetchingMiddleware from './Middlewares/cardFetchingMiddleware';
import createAppStore from './createAppStore';


// ReactDOM.render(<App />, document.getElementById('root'));
// let store = createStore(reducerApp, applyMiddleware(userFetchingMiddleware, userFetchingRegistrMiddleware, cardFetchingMiddleware));

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <BrowserRouter>
            <Provider store={createAppStore()} >
            <LoginProvider>
                <App />
            </LoginProvider>
            </Provider>
        </BrowserRouter>
    </MuiThemeProvider>,
    document.getElementById("root")
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// serviceWorker.unregister();