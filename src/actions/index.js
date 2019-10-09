import {
  FETCH_GOODS_FAILURE,
  FETCH_GOODS_SUCCESS,
  FETCH_GOODS_START, LOAD_MORE_GOODS_START, LOAD_MORE_GOODS_SUCCESS, LOAD_MORE_GOODS_FAILURE
} from "../actionTypes";
import { fetchGoods as fetchGoodsApi, loadMoreGoods as loadMoreGoodsApi } from "../methods";
import { getRenderedGoodsLenght } from "../selectors";

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
export const loadMoreGoods = () => async (dispatch, getState) => {
  const offset = getRenderedGoodsLenght(getState())
  dispatch({
    type: LOAD_MORE_GOODS_START
  });
  try {
    const goods = await loadMoreGoodsApi({ offset });
    dispatch({
      type: LOAD_MORE_GOODS_SUCCESS,
      payload: goods
    });
  } catch (err) {
    dispatch({
      type: LOAD_MORE_GOODS_FAILURE,
      payload: err,
      error: true
    });
  }
};
