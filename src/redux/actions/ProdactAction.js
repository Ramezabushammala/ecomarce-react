import { usedeletData } from "../../hooks/useDeleteprog";
import { useGetData } from "../../hooks/useGetdata";
import {  usePostDataWiteImage } from "../../hooks/usePostdata";
import { useUbdateDataWiteImage } from "../../hooks/useUbdateProd";
import { CREATE_PRODACT,UPDATE_PRODACT,GET_DELET_PRODACTID,GET_LIKE_PRODACTID, GET_Page_PRODACT, GET_ALL_PRODACT, GET_ALL_PRODACTID, GET_ERROR } from "../types";

export const CreateProdact = (dataform) => async (dispatch) => {
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const res = await usePostDataWiteImage(`/api/v1/products`,dataform);
    dispatch({
      type: CREATE_PRODACT,
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
    export const getALLProdact = (limit) => async(dispatch) => {
      try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const res = await useGetData(`/api/v1/products?limit=${limit}`);
    
     dispatch({
      type: GET_ALL_PRODACT,
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
export const getALLProdactID = (id) => async(dispatch) => {
  try {
// eslint-disable-next-line react-hooks/rules-of-hooks
const res = await useGetData(`/api/v1/products/${id}`);
 dispatch({
  type: GET_ALL_PRODACTID,
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
export const getALLProdactLike = (id) => async(dispatch) => {
  try {
// eslint-disable-next-line react-hooks/rules-of-hooks
const res = await useGetData(`/api/v1/products?category=${id}`);
 dispatch({
  type: GET_LIKE_PRODACTID,
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

export const getALLProdactPage = (page,limit) => async(dispatch) => {
  try {
// eslint-disable-next-line react-hooks/rules-of-hooks
const res = await useGetData(`/api/v1/products?limit=${limit}&page=${page}`);
 dispatch({
  type: GET_ALL_PRODACTID,
  payload: res,
});
}catch (e) {
dispatch({
  type: GET_ERROR,
  payload: "error" + e,
});
}
};

export const getSearchProdact = (quereString) => async(dispatch) => {
  try {
// eslint-disable-next-line react-hooks/rules-of-hooks
const res = await useGetData(`/api/v1/products?${quereString}`);
 dispatch({
  type: GET_ALL_PRODACT,
  payload: res,
});
}catch (e) {
dispatch({
  type: GET_ERROR,
  payload: "error" + e,
});
}
};

export const getdeleteProdact = (id) => async(dispatch) => {
  try {
// eslint-disable-next-line react-hooks/rules-of-hooks
const res = await usedeletData(`/api/v1/products/${id}`);
 dispatch({
  type: GET_DELET_PRODACTID,
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
export const UbdateProdact = (id,dataform) => async (dispatch) => {
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const res = await useUbdateDataWiteImage(`/api/v1/products/${id}`,dataform);
    dispatch({
      type: UPDATE_PRODACT,
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