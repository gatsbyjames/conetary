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
  NEWS_UPDATE_REQUEST,
  NEWS_UPDATE_SUCCESS,
  NEWS_UPDATE_FAIL,
  NEWS_DELETE_REQUEST,
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
  NEWS_FAKE_FAIL,
  NEWS_UNLIKE_REQUEST,
  NEWS_UNLIKE_SUCCESS,
  NEWS_UNLIKE_FAIL,
  NEWS_UNDISLIKE_REQUEST,
  NEWS_UNFACT_REQUEST,
  NEWS_UNFACT_SUCCESS,
  NEWS_UNFACT_FAIL,
  NEWS_UNFAKE_REQUEST,
  NEWS_UNFAKE_SUCCESS,
  NEWS_UNFAKE_FAIL,
} from "../constants/newsConstants";

import axios from "axios";
import { USER_DELETE_FAIL } from "../constants/userConstants";

export const listNews = () => async (dispatch) => {
  try {
    dispatch({
      type: NEWS_LIST_REQUEST,
    });

    const { data } = await axios.get("/api/news/");
    console.log(data);

    dispatch({
      type: NEWS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEWS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listNewsCoinDetail = (id) => async (dispatch) => {
  try {
    dispatch({
      type: NEWS_COIN_DETAIL_REQUEST,
    });

    const { data } = await axios.get(`/api/news/post/${id}`);

    dispatch({
      type: NEWS_COIN_DETAIL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEWS_COIN_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createNews = (subject, content, category) => async (dispatch) => {
  try {
    dispatch({
      type: NEWS_CREATE_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/news/create/",
      { subject: subject, content: content, category: category },
      config
    );

    dispatch({
      type: NEWS_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEWS_CREATE_FAIL,
      payload:
        error.response && error.response.data.listNewsCoinDetail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const updateNews = (news) => async (dispatch, getState) => {
  try {
    dispatch({
      type: NEWS_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/news/update/${news.id}/`,
      news,
      config
    );

    dispatch({
      type: NEWS_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEWS_UPDATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const deleteNews = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: NEWS_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(`/api/news/delete/${id}`, config);

    dispatch({
      type: NEWS_COIN_DETAIL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_DELETE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const likeNews = (news) => async (dispatch, getState) => {
  try {
    dispatch({
      type: NEWS_LIKE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/news/like/${news.id}/`,
      news,
      config
    );

    dispatch({
      type: NEWS_LIKE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEWS_LIKE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const dislikeNews = (news) => async (dispatch, getState) => {
  try {
    dispatch({
      type: NEWS_DISLIKE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "appllication/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/news/dislike/${news.id}/`,
      news,
      config
    );

    dispatch({
      type: NEWS_DISLIKE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEWS_DISLIKE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const factNews = (news) => async (dispatch, getState) => {
  try {
    dispatch({
      type: NEWS_FACT_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.put(
      `/api/news/fact/${news.id}/`,
      news,
      config
    );

    dispatch({
      type: NEWS_FACT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEWS_FACT_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const fakeNews = (news) => async (dispatch, getState) => {
  try {
    dispatch({
      type: NEWS_FAKE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/news/fake/${news.id}/`,
      news,
      config
    );

    dispatch({
      type: NEWS_FAKE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEWS_FAKE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const unlikeNews = (news) => async (dispatch, getState) => {
  try {
    dispatch({
      type: NEWS_FAKE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/news/unlike/${news.id}/`,
      news,
      config
    );

    dispatch({
      type: NEWS_FAKE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEWS_FAKE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const undislikeNews = (news) => async (dispatch, getState) => {
  try {
    dispatch({
      type: NEWS_FAKE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/news/undislike/${news.id}/`,
      news,
      config
    );

    dispatch({
      type: NEWS_FAKE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEWS_FAKE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const unfactNews = (news) => async (dispatch, getState) => {
  try {
    dispatch({
      type: NEWS_FAKE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/news/unfact/${news.id}/`,
      news,
      config
    );

    dispatch({
      type: NEWS_FAKE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEWS_FAKE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const unfakeNews = (news) => async (dispatch, getState) => {
  try {
    dispatch({
      type: NEWS_FAKE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/news/unfake/${news.id}/`,
      news,
      config
    );

    dispatch({
      type: NEWS_FAKE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEWS_FAKE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const listCoinNews = () => async (dispatch) => {
  try {
    dispatch({
      type: NEWS_LIST_REQUEST,
    });

    const { data } = await axios.get("/api/news/coin/");
    console.log(data);

    dispatch({
      type: NEWS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEWS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
