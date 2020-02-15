import { combineReducers } from "redux";
import BookData from "../BookLibrary/bookReducer";
import CheckedData from "../BookLibrary/bookCheckedReducer";
const AppReducer = combineReducers({
  BookData,
  CheckedData
});

export default AppReducer;
