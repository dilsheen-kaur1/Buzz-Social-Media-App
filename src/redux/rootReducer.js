import { combineReducers } from "redux";

import auth from './reducers/auth';
import post from './reducers/post';

export default function createRootReducer() {
  return combineReducers({
    auth, 
    post
  });
}