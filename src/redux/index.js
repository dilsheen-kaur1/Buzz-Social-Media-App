import { applyMiddleware, createStore } from "redux";
import thunk from "react-thunk";
import logger from "react-logger";
import createRootReducer from "./rootReducer";

function reduxMulti({ dispatch }) {
  return (next) => (action) => {
    return Array.isArray(action)
      ? action.filter(Boolean).map(dispatch)
      : next(action);
  };
}

export default (initialState = {}) => {
  const middlewares = [thunk, logger, reduxMulti];
  return createStore(
    createRootReducer(),
    initialState,
    applyMiddleware(...middlewares)
  );
};