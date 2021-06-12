import { SET_ALLOWED_ENUMS, SET_LOADING } from "./types";

export const setEnums = (enums: any) => {
  return {
    type: SET_ALLOWED_ENUMS,
    enums
  };
};

export const isLoading = (is_loading:any) => {
  return {
    type: SET_LOADING,
    is_loading
  };
};
