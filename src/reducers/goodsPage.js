import * as R from "ramda";
import { FETCH_GOODS_SUCCESS, LOAD_MORE_GOODS_SUCCESS } from "../actionTypes";

const initialState = {
  ids: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_GOODS_SUCCESS:
      return R.merge(state, { ids: R.pluck("id", payload) });
    case LOAD_MORE_GOODS_SUCCESS:
      const ids = R.pluck("id", payload)
      return R.merge(state, { ids: R.concat(state.ids, ids) });
    default:
      return state;
  }
};
