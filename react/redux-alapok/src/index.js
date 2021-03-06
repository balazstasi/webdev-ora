import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import counterReducer from "./store/reducers/counter";
import resultsReducer from "./store/reducers/result";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  counterReducer,
  resultsReducer,
});

// fuggveny osszetetel (compose)
// f(x) = x + 1
// g(y) = y * 2
// g(f(x)) = g(2+1) = 3 * 2 = 6

const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log("[Middleware] Dispatching", action);
      const result = next(action);
      console.log("[Middleware] next state", store.getState());
      return result;
    };
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// composeEnhancers - cisnal egy nagy middleware fg-t a loggerbol es a thunkbol
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
