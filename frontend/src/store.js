import { combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productListReducer,
  productDetailsReducer,
  productCreateReducer,
  productUpdateReducer,
  productReviewCreateReducer,
  productTopRatedReducer,
  productDeleteReducer,
} from "./reducers/productReducers";
import {
  userLoginReducer,
  userDetailsReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
  userListReducer,
  userUpdateReducer,
  userDeleteReducer,
} from "./reducers/userReducers";
import { cartReducer } from "./reducers/cartReducers";
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderListMyReducer,
  orderListReducer,
  orderPayReducer,
  orderDeliverReducer,
} from "./reducers/orderReducers";

import {
  newsDetailReducer,
  newsReducer,
  newsCreateReducer,
  newsUpdateReducer,
  newsDeleteReducer,
  newsLikeReducer,
  newsDislikeReducer,
  newsFactReducer,
  newsFakeReducer,
  newsUnlikeReducer,
  newsUndislikeReducer,
  newsUnfactReducer,
  newsUnfakeReducer,
  coinNewsReducer,
} from "./reducers/newsReducers";

const cartItemFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

const likeFromStorage = localStorage.getItem("like")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

// our data come from state

const preloadedState = {
  cart: {
    cartItems: cartItemFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
};

const reducer = {
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productDelete: productDeleteReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
  productReviewCreate: productReviewCreateReducer,
  productTopRated: productTopRatedReducer,

  cart: cartReducer,

  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,

  userUpdateProfile: userUpdateProfileReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,

  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderListMy: orderListMyReducer,
  orderList: orderListReducer,
  orderDeliver: orderDeliverReducer,

  newsList: newsReducer,
  newsDetail: newsDetailReducer,
  newsCreate: newsCreateReducer,
  newsUpdate: newsUpdateReducer,
  newsDelete: newsDeleteReducer,
  newsDetails: newsDetailReducer,
  newsLike: newsLikeReducer,
  newsDislike: newsDislikeReducer,
  newsFact: newsFactReducer,
  newsFake: newsFakeReducer,
  newsUnlike: newsUnlikeReducer,
  newsUndislike: newsUndislikeReducer,
  newsUnfact: newsUnfactReducer,
  newsUnfake: newsUnfakeReducer,
  coinNews: coinNewsReducer,
};

export default configureStore({
  reducer,
  preloadedState,
  middleware: [thunk],
});
