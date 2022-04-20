import { combineReducers } from "redux";

import auth from './reducers/auth';
import post from './reducers/post';
import loginReducer from "./Login/loginReducer";

// export default function createRootReducer() {
//   return combineReducers({
//     auth, 
//     post,
//     updateProfileReducer
//   });
// }

const rootReducer = combineReducers({
  auth, 
  post,
  login:loginReducer
});

export default rootReducer;