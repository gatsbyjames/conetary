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
  NEWS_UPDATE_REQUEST,
  NEWS_UPDATE_SUCCESS,
  NEWS_UPDATE_RESET,
  NEWS_DELETE_FAIL,
  NEWS_DELETE_REQUEST,
  NEWS_UPDATE_FAIL,
  NEWS_DELETE_SUCCESS,
  NEWS_DETAILS_FAIL,
  NEWS_DETAILS_SUCCESS,
  NEWS_DETAILS_REQUEST,
  NEWS_DETAILS_RESET,
  NEWS_LIKE_REQUEST,
  NEWS_LIKE_SUCCESS,
  NEWS_LIKE_FAIL,
  NEWS_DISLIKE_REQUEST,
  NEWS_DISLIKE_SUCCESS,
  NEWS_DISLIKE_FAIL,
  NEWS_FACT_REQUEST,
  NEWS_FACT_SUCCESS,
  NEWS_FACT_FAIL,
  NEWS_FAKE_REQUEST,
  NEWS_FAKE_SUCCESS,
  NEWS_UNLIKE_REQUEST,
  NEWS_UNLIKE_SUCCESS,
  NEWS_UNLIKE_FAIL,
  NEWS_UNDISLIKE_REQUEST,
  NEWS_UNDISLIKE_SUCCESS,
  NEWS_UNDISLIKE_FAIL,
  NEWS_UNFACT_REQUEST,
  NEWS_UNFACT_SUCCESS,
  NEWS_UNFACT_FAIL,
  NEWS_UNFAKE_REQUEST,
  NEWS_UNFAKE_SUCCESS,
  NEWS_UNFAKE_FAIL,
} from "../constants/newsConstants";

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

export const newsDetailReducer = (
  state = { news: { comments: [] } },
  action
) => {
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

export const newsUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case NEWS_UPDATE_REQUEST:
      return { loading: true };
    case NEWS_UPDATE_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload };
    case NEWS_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case NEWS_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const newsDetailsReducer = (state = { news: {} }, action) => {
  switch (action.type) {
    case NEWS_DETAILS_REQUEST:
      return { loading: true };
    case NEWS_DETAILS_SUCCESS:
      return { loading: false, news: action.payload };
    case NEWS_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case NEWS_DETAILS_RESET:
      return { news: {} };
    default:
      return state;
  }
};

export const newsDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case NEWS_DELETE_REQUEST:
      return { loading: true };
    case NEWS_DELETE_SUCCESS:
      return { loading: false, success: true };
    case NEWS_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const newsLikeReducer = (state = {}, action) => {
  switch (action.type) {
    case NEWS_LIKE_REQUEST:
      return { loading: true };
    case NEWS_LIKE_SUCCESS:
      return { loading: false, success: true, news: action.payload };
    case NEWS_LIKE_FAIL:
      return { loading: false, error: true };
    default:
      return state;
  }
};

export const newsDislikeReducer = (state = {}, action) => {
  switch (action.type) {
    case NEWS_DISLIKE_REQUEST:
      return { loading: true };
    case NEWS_DISLIKE_SUCCESS:
      return { loading: false, success: true, news: action.payload };
    case NEWS_DISLIKE_FAIL:
      return { loading: false, error: true };
    default:
      return state;
  }
};

export const newsFactReducer = (state = {}, action) => {
  switch (action.type) {
    case NEWS_FACT_REQUEST:
      return { loading: true };
    case NEWS_FACT_SUCCESS:
      return { loading: true, succes: true, news: action.payload };
    case NEWS_FACT_FAIL:
      return { loading: true, error: true };
    default:
      return state;
  }
};

export const newsFakeReducer = (state = {}, action) => {
  switch (action.type) {
    case NEWS_FAKE_REQUEST:
      return { loading: true };
    case NEWS_FAKE_SUCCESS:
      return { loading: false, success: true, news: action.payload };
    case NEWS_FACT_FAIL:
      return { loading: false, error: true };
    default:
      return state;
  }
};

export const newsUnlikeReducer = (state = {}, action) => {
  switch (action.type) {
    case NEWS_UNLIKE_REQUEST:
      return { loading: true };
    case NEWS_UNLIKE_SUCCESS:
      return { loading: true, success: true, news: action.payload };
    case NEWS_UNLIKE_FAIL:
      return { loading: false, erorr: true };

    default:
      return state;
  }
};

export const newsUndislikeReducer = (state = {}, action) => {
  switch (action.type) {
    case NEWS_UNDISLIKE_REQUEST:
      return { loading: true };
    case NEWS_UNDISLIKE_SUCCESS:
      return { loading: false, success: true, news: action.payload };
    case NEWS_UNDISLIKE_FAIL:
      return { loading: false, error: true };
    default:
      return state;
  }
};

export const newsUnfactReducer = (state = {}, action) => {
  switch (action.type) {
    case NEWS_UNFACT_REQUEST:
      return { loading: true };
    case NEWS_UNFACT_SUCCESS:
      return { loading: false, success: true, news: action.payload };
    case NEWS_UNFACT_FAIL:
      return { loading: false, error: true };
    default:
      return state;
  }
};

export const newsUnfakeReducer = (state = {}, action) => {
  switch (action.type) {
    case NEWS_UNFAKE_REQUEST:
      return { loading: true };
    case NEWS_UNFAKE_SUCCESS:
      return { loading: false, success: true, news: action.payload };
    case NEWS_UNFAKE_FAIL:
      return { loading: false, error: true };
    default:
      return state;
  }
};

export const coinNewsReducer = (state = { news: [] }, action) => {
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
