import { combineReducers } from "redux";
import goods from "./goods";
import { connectRouter } from "connected-react-router";

export default history =>
  combineReducers({
    goods,
    router: connectRouter(history)
  });
