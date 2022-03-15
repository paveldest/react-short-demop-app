import { combineReducers } from "redux";
import { reducer as userReducer } from "./user";

import { UserState } from "./user/userTypes";
export default combineReducers({
  user: userReducer,
});

export interface AppStateType {
  user: UserState;
}
