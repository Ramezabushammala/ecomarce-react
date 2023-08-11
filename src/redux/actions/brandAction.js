import { CREATE_BRAND,GET_ONE_BREAND, GET_ALL_BRAND, GET_ERROR } from "../types"
import { useGetData } from "../../hooks/useGetdata";
import { usePostDataWiteImage } from "../../hooks/usePostdata";

export const getAllBrand =(limit)=> async(dispatch)=>{
    try{
        const response = await useGetData(`/api/v1/brands?limit=${limit}`);
        dispatch({
            type:GET_ALL_BRAND,
            payload:response
        })
    }catch(e){
        dispatch({
            type :GET_ERROR,
            payload:"error" + e,
         })
    }
}
export const getOneBrand =(id)=> async(dispatch)=>{
    try{
  //custom hooks get api url 
 const response = await useGetData(`/api/v1/brands/${id}`);
 dispatch({
    type : GET_ONE_BREAND,
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
export const getAllBrandPage =(page)=> async(dispatch)=>{ 
    try{
  //custom hooks get api url 
 const response = await useGetData(`/api/v1/brands?limit=6&page=${page}`);
 dispatch({
    type : GET_ALL_BRAND,
    payload:response,
 })
    } catch(e){     
        dispatch({
            type :GET_ERROR,
            payload:"error" + e,
         })
        
    }
}

export const createBrand =(formData)=> async(dispatch)=>{ 
    try{
  //custom hooks get api url 
 const response = await usePostDataWiteImage(`/api/v1/brands`,formData);
 dispatch({
    type : CREATE_BRAND,
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