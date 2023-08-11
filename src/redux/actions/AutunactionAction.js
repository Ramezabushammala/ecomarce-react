import { useGetDataToken } from "../../hooks/useGetdata";
import { usePostData } from "../../hooks/usePostdata";
import { SIGN_UP_SUCCESS ,LOGIN_USER ,FORGET_PASSWORD,GET_CURRENT_USER} from "../types";

export const CreateNewaccount = (data) => async (dispatch) => {
    try {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const response = await usePostData(`/api/v1/auth/signup`,data);
      dispatch({
        type: SIGN_UP_SUCCESS,
        payload:response,
        loading:true
      });
    }catch (e) {
      dispatch({
        type: SIGN_UP_SUCCESS,
        payload:e.response
      });
    }
  };

  export const LoginUser = (data) => async (dispatch) => {
    try {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const response = await usePostData(`/api/v1/auth/login`,data);
      dispatch({
        type: LOGIN_USER,
        payload: response,
        loading:true
      });
    }catch (e) {
      dispatch({
        type: LOGIN_USER,
        payload:e.response
      });
    }
  };

  export const getLogeedUser = () => async (dispatch) => {
    try {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const response = await useGetDataToken(`/api/v1/users/getMe`);
      dispatch({
        type: GET_CURRENT_USER,
        payload: response,
        loading:true
      });
    }catch (e) {
      dispatch({
        type: GET_CURRENT_USER,
        payload:e.response
      });
    }
  };

  export const ForgetPassword = (data) => async (dispatch) => {
    try {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const response = await usePostData(`/api/v1/auth/forgotPasswords`,data);
      dispatch({
        type: FORGET_PASSWORD,
        payload: response,
        loading:true
      });
    }catch (e) {
      dispatch({
        type: FORGET_PASSWORD,
        payload:e.response
      });
    }
  };