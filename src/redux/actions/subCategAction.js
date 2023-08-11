import { useGetData } from "../../hooks/useGetdata";
import { usePostData } from "../../hooks/usePostdata";
import { CREATE_SUBCATEGORY, GETALL_SUBCATEGORY, GET_ERROR } from "../types";

export const CreateSupCategory = (dataform) => async (dispatch) => {
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const res = await usePostData(`/api/v1/subcategories`,dataform);
    dispatch({
      type: CREATE_SUBCATEGORY,
      payload: res,
      loading:true
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "error" + e,
    });
  }
};
    export const getALLSUBCATEGORY = (id) => async(dispatch) => {
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const res = await useGetData(`/api/v1/categories/${id}/subcategories`);

    dispatch({
      type: GETALL_SUBCATEGORY,
      payload: res,
      loading:true
    });
  }catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "error" + e,
    });
  }
};
