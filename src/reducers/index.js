import { combineReducers } from "redux";
import location from "./location";
import theme from "./theme";

// combining all the reducers here in the single file
export default combineReducers({ location, theme });
