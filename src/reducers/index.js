import { combineReducers } from "redux";
import linksReducers from "./links";

const rootReducers = combineReducers({
  links: linksReducers
});

export default rootReducers;
