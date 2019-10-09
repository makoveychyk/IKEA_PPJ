import { combineReducers } from "redux";
import goods from "./goods";
import goodsPage from "./goodsPage";
import { connectRouter } from "connected-react-router";

export default history =>
  combineReducers({
    goods,
    goodsPage,
    router: connectRouter(history)
  });
