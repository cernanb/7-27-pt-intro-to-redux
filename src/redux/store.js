import { createStore, combineReducers } from "redux";
import students from "./studentReducer";
import subjects from "./subjectReducer";

const rootReducer = combineReducers({
  subjects,
  students,
});

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
