import * as R from "ramda";

import { ADD_GOODS_TO_BASKET } from "../actionTypes";

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_GOODS_TO_BASKET:
      return R.append(payload, state);
    default:
      return state;
  }
};
