import {
  FETCH_GOODS_FAILURE,
  FETCH_GOODS_SUCCESS,
  FETCH_GOODS_START
} from "../actionTypes";
import { fetchGoods as fetchGoodsApi } from "../methods";

export const fetchGoods = () => async dispatch => {
  dispatch({
    type: FETCH_GOODS_START
  });
  try {
    const goods = await fetchGoodsApi();
    dispatch({
      type: FETCH_GOODS_SUCCESS,
      payload: goods
    });
  } catch (err) {
    dispatch({
      type: FETCH_GOODS_FAILURE,
      payload: err,
      error: true
    });
  }
};
