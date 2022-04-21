import { combineReducers } from "redux";
import loginReducer from "./Login/loginReducer";

const rootReducer = combineReducers({
  login:loginReducer
});

const mainReducer = (state, action) => {
  if(action.type === 'LOGOUT_SUCCESS') state = undefined;
  return rootReducer(state, action)
}

export default mainReducer;