import {
  FETCH_GOODS_FAILURE,
  FETCH_GOODS_SUCCESS,
  FETCH_GOODS_START, LOAD_MORE_GOODS_START, LOAD_MORE_GOODS_SUCCESS, LOAD_MORE_GOODS_FAILURE, FETCH_GOODS_BY_ID_START, FETCH_GOODS_BY_ID_SUCCESS, FETCH_GOODS_BY_ID_FAILURE
} from "../actionTypes";
import { fetchGoods as fetchGoodsApi, loadMoreGoods as loadMoreGoodsApi, fetchGoodById as fetchGoodByIdApi } from "../methods";
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

export const fetchGoodById = id => async dispatch => {
  dispatch({ type: FETCH_GOODS_BY_ID_START });
  try {
    const good = await fetchGoodByIdApi(id);
    dispatch({
      type: FETCH_GOODS_BY_ID_SUCCESS,
      payload: good
    });
  } catch (err) {
    dispatch({
      type: FETCH_GOODS_BY_ID_FAILURE,
      payload: err,
      error: true
    });
  }
}