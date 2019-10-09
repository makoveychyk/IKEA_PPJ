import { combineReducers } from "redux";
import goods from "./goods";
import goodsPage from "./goodsPage";
import goodPage from "./goodPage";
import { connectRouter } from "connected-react-router";

export default history =>
  combineReducers({
    router: connectRouter(history),
    goods,
    goodsPage,
    goodPage,

  });
