import { combineReducers } from "redux";

import auth from './reducers/auth';
import post from './reducers/post';
import updateProfileReducer from "./reducers/updateProfileReducer";

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
  updateProfile : updateProfileReducer
});

export default rootReducer;