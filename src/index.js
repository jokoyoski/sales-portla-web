import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import { store, persistor } from "../src/redux-store/store";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import "mdbreact/dist/css/mdb.css";
import './index.css';
import App from "../src/App";
import registerServiceWorker from './registerServiceWorker';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import {library} from "@fortawesome/fontawesome-svg-core"

library.add(faEye, faEyeSlash)
ReactDOM.render(
   
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);


registerServiceWorker();