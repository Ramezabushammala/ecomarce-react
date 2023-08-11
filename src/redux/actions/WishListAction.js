import {usedeletDataToken } from "../../hooks/useDeleteprog";
import { usePostData } from "../../hooks/usePostdata";
import { useGetDataToken } from "../../hooks/useGetdata";
import {DELETE_LIST_FAV, WISH_LIST_FAV,All_LIST_FAV} from "../types"

 export const AddWishList = (body)=> async(dispatch)=>{
  try{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const response =await usePostData(`/api/v1/wishlist`,body);
   
   dispatch({
      type: WISH_LIST_FAV,
      payload: response.data,
      loading:true
    })
  }catch (e){
   dispatch({
    type: WISH_LIST_FAV,
    payload:e.response
    })
  }
 }

 export const DeleteWishList = (id)=> async(dispatch)=>{
    try{
     
      const response =await usedeletDataToken(`/api/v1/wishlist/${id}`);
      
     dispatch({
        type: DELETE_LIST_FAV,
        payload: response,
       
      })
    }catch (e){
     dispatch({
      type: DELETE_LIST_FAV,
      payload:e.response,
      })
    }
   }

   export const AllWishList = ()=> async(dispatch)=>{
    try{
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const response =await useGetDataToken(`/api/v1/wishlist`);
     dispatch({
        type: All_LIST_FAV,
        payload: response.data,
        loading:true
      })
    }catch (e){
     dispatch({
      type: All_LIST_FAV,
      payload:e.response
      })
    }
   }