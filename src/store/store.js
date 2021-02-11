import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "../reducer/index";

var store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
