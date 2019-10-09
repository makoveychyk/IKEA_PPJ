import * as R from "ramda";

import { FETCH_GOODS_SUCCESS, LOAD_MORE_GOODS_SUCCESS, FETCH_GOODS_BY_ID_SUCCESS } from "../actionTypes";

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_GOODS_SUCCESS:
      const newValue = R.indexBy(R.prop("id"), payload);
      return R.merge(state, newValue);
    case LOAD_MORE_GOODS_SUCCESS:
      const moreValue = R.indexBy(R.prop("id"), payload);
      return R.merge(state, moreValue);
    case FETCH_GOODS_BY_ID_SUCCESS:
      return R.assoc(payload.id, payload, state)
    default:
      return state;
  }
};
