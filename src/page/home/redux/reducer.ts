import { SET_ALLOWED_ENUMS, SET_LOADING } from "./types";

const INITIAL_STATE = {
  enums: {},
  is_loading: false,
};

const reducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SET_ALLOWED_ENUMS:
      return { ...state, enums: { ...action.enums } };

    case SET_LOADING:
      return { ...state, is_loading: action.is_loading };
    default:
      return state;
  }
};

export default reducer;
