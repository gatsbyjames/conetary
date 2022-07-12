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
} from "../constants/NewsConstants";

import axios from "axios";

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

export const createNews = (subject, content) => async (dispatch) => {
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
      { subject: subject, content: content },
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
