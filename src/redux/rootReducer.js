import { combineReducers } from "redux";

import auth from './reducers/auth';
import post from './reducers/post';
import loginReducer from "./Login/loginReducer";

const rootReducer = combineReducers({
  auth, 
  post,
  login:loginReducer
});

export default rootReducer;