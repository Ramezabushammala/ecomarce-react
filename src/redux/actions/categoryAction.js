
import {GET_ALL_CATEGORY, GET_ONE_CATEGORY, GET_ERROR,CREATE_CATEGORY} from "../types";
import { useGetData } from "../../hooks/useGetdata";
import { usePostDataWiteImage } from "../../hooks/usePostdata";

export const getAllCategory =(limit)=> async(dispatch)=>{
    try{
  //custom hooks get api url 
 const response = await useGetData(`/api/v1/categories?limit=${limit}`);
 dispatch({
    type : GET_ALL_CATEGORY,
    payload:response,
 })
    } catch(e){     
        dispatch({
            type :GET_ERROR,
            payload:"error" + e,
         })
        
    }
}
export const getOneCategory =(id)=> async(dispatch)=>{
    try{
  //custom hooks get api url 
 const response = await useGetData(`/api/v1/categories/${id}`);
 dispatch({
    type : GET_ONE_CATEGORY,
    payload:response,
 })
    } catch(e){     
        dispatch({
            type :GET_ERROR,
            payload:"error" + e,
         })
        
    }
}
// pagination 
export const getAllCategoryPage =(page)=> async(dispatch)=>{ 
    try{
  //custom hooks get api url 
 const response = await useGetData(`/api/v1/categories?limit=6&page=${page}`);
 dispatch({
    type : GET_ALL_CATEGORY,
    payload:response,
 })
    } catch(e){     
        dispatch({
            type :GET_ERROR,
            payload:"error" + e,
         })
        
    }
}

export const createCategory =(formData)=> async(dispatch)=>{ 
    try{
  //custom hooks get api url 
 const response = await usePostDataWiteImage(`/api/v1/categories`,formData);
 dispatch({
    type : CREATE_CATEGORY,
    payload:response,
    loading:true,
 })
    } catch(e){     
        dispatch({
            type :GET_ERROR,
            payload:"error" + e,
         })
        
    }
}

