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
