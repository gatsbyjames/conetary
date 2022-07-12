import {
  NEWS_LIST_REQUEST,
  NEWS_LIST_SUCCESS,
  NEWS_LIST_FAIL,
  NEWS_COIN_DETAIL_REQUEST,
  NEWS_COIN_DETAIL_SUCCESS,
  NEWS_COIN_DETAIL_FAIL,
  NEWS_CREATE_REQUEST,
  NEWS_CREATE_SUCCESS,
  NEWS_CREATE_FAIL,
  NEWS_CREATE_RESET,
} from "../constants/NewsConstants";

export const newsReducer = (state = { news: [] }, action) => {
  switch (action.type) {
    case NEWS_LIST_REQUEST:
      return { loading: true };

    case NEWS_LIST_SUCCESS:
      return { loading: false, news: action.payload };

    case NEWS_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const coinNewsReducer = (state = { news: { comments: [] } }, action) => {
  switch (action.type) {
    case NEWS_COIN_DETAIL_REQUEST:
      return { loading: true, ...state };
    case NEWS_COIN_DETAIL_SUCCESS:
      return { loading: false, news: action.payload };
    case NEWS_COIN_DETAIL_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const newsCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case NEWS_CREATE_REQUEST:
      return { loading: true };
    case NEWS_CREATE_SUCCESS:
      return { loading: false, success: true, news: action.payload };
    case NEWS_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case NEWS_CREATE_RESET:
      return {};

    default:
      return state;
  }
};
