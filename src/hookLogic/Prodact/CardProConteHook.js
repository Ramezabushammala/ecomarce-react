import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllWishList } from "../../redux/actions/WishListAction";


export default function CardProConteHook() {
 
    const [loading,setLoading]=useState(true);
    const [favprod,setFavprod]=useState([]);
    const dispatch =useDispatch();
    const {userfav}=useSelector((state)=>state.WishListReduser)
    useEffect(()=>{
      try{
        const get =async()=>{
          setLoading(true);
         await dispatch(AllWishList());
         setLoading(false);
        }
          get();
      }catch(e){
      }
    },[]);
    useEffect(()=>{
      try{
        if(loading===false){
          if(userfav){
          setFavprod(userfav.map(item=>item._id));
          
        }}
      }catch(e){
         
      }
           
    },[loading]);
    
    return [favprod,userfav];
}
