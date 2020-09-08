import phone from "../apis/phone";
import {
  FETCH_PHONES_REQUEST,
  FETCH_PHONES_SUCCESS,
  FETCH_PHONES_ERROR,
} from "./actionTypes";

export const fetchPhonesRequest = () => {
  return {
    type: FETCH_PHONES_REQUEST,
  };
};

export const fetchPhonesSuccess = (users) => {
  return {
    type: FETCH_PHONES_SUCCESS,
    payload: users,
  };
};

export const fetchPhonesError = (error) => {
  return {
    type: FETCH_PHONES_ERROR,
    payload: error,
  };
};

export const fetchPhones = () => {
  return (dispatch) => {
    dispatch(fetchPhonesRequest());
    phone
      .get("/phones")
      // phone.get("/posts")
      .then((response) => {
        dispatch(fetchPhonesSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchPhonesError(error.message));
      });
  };
};
