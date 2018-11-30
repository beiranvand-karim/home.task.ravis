import {combineReducers} from "redux";
import UsersReducer from "./UsersReducer";

const reducer = combineReducers({
   usersReducer: UsersReducer
});

export default reducer;
