import {
  FETCH_PHONES_REQUEST,
  FETCH_PHONES_SUCCESS,
  FETCH_PHONES_ERROR,
} from "../actions/actionTypes";

const initialState = {
  loading: false,
  phones: [],
  error: "",
};


export default (state= initialState, action) => {
  switch (action.type) {
    case FETCH_PHONES_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_PHONES_SUCCESS:
      return {
        loading: false,
        phones: action.payload,
        error: ""
      };
    case FETCH_PHONES_ERROR:
      return {
        loading: false,
        phones: [],
        error: action.payload,
      };
    default:
      return state;
  }
}