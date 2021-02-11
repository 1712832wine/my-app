import { combineReducers } from "redux";

import authReducer from "./auth";

let reducersAll = combineReducers({
  auth: authReducer,
});

export default reducersAll;
