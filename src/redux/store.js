import { createStore, combineReducers } from "redux";
import students from "./reducers/studentReducer";
import subjects from "./reducers/subjectReducer";
import darkMode from "./reducers/darkModeReducer";

const rootReducer = combineReducers({
  subjects,
  students,
  darkMode,
});

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
