import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//REDUX SETUP
<<<<<<< HEAD

import { createStore, applyMiddleware, compose } from "redux";
=======
import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, compose } from "redux";
>>>>>>> b8595349944537ec94f5a47c2f7980ed52f29199
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

<<<<<<< HEAD
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));
=======
const store = configureStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);
>>>>>>> b8595349944537ec94f5a47c2f7980ed52f29199

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
