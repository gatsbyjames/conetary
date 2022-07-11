import {
  NEWS_LIST_REQUEST,
  NEWS_LIST_SUCCESS,
  NEWS_LIST_FAIL,
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
