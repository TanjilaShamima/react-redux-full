import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import { actionType } from "./counter/actionTypes";
import { composeWithDevTools } from "redux-devtools-extension";

const myLogger = (store: any) => (next: any) => (action: actionType) => {
  console.log("Action", JSON.stringify(action));

  return next(action);
};

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(myLogger))
);

export default store;
