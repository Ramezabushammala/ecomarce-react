import  { useEffect, useState } from "react";
import favoff from "../../images/fav-off.png";
import favon from "../../images/fav-on.png";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../hookLogic/useNotfiction";
import { AddWishList, DeleteWishList } from "../../redux/actions/WishListAction";

export default function ProdCardHook(favprod,item) {
   
    let fav = favprod.some(fitem=>fitem===item._id)
    const [favimg,setFavimg]=useState(favoff);
    const [isfav,setIsfav]=useState(fav);
    const [loading,setLoading]=useState(true);
    const [loadingremove,setLoadingremove]=useState(true);
    const dispatch = useDispatch();
    const {wishlist}=useSelector((state)=>state.WishListReduser);
    const {deletefav}=useSelector((state)=>state.WishListReduser);
    
    useEffect(()=>{
        setIsfav(favprod.some(fitem=>fitem===item._id));
  },[favprod]);
    const OnChangeFav =()=>{
          if(isfav){
            deleteWishListfun();
          }else{
            AddWishListfun();
          }
     }
     useEffect(()=>{
         if(isfav===true){
          setFavimg(favon);
         }
         else{
          setFavimg(favoff);
         }
     },[isfav])
  
     const AddWishListfun =async()=>{
        setIsfav(true);
        setFavimg(favon);
        setLoading(true);
    await dispatch(AddWishList(
      { productId: item._id,}
    ));
    setLoading(false);
   
    }
      
    useEffect(()=>{
      if(loading===false){
        if(wishlist && wishlist.status==="success"){
          notify("تم اضافة المنتج للمفضلة بنجاح ","success");
        }else if (wishlist && wishlist.status===401){
          notify("لم تتمكن من اضافة المنتج للمفضلة بعد تسجيل الدخول ","error");   
        }
      }
  },[loading]);
  
    const deleteWishListfun =async()=>{
      setIsfav(false);
      setFavimg(favoff);
      setLoadingremove(true);
      await dispatch(DeleteWishList(item._id));
      setLoadingremove(false);
      }
  
      useEffect(()=>{
        if(loadingremove===false){
          if(deletefav && deletefav.status==="success"){
            notify("تم حذف المنتج من المفضلة بنجاح ","success");
          }else if(deletefav && deletefav.status===401){
            notify("لم تتمكن من حذف المنتج من المفضلة بعد تسجيل الدخول ","error");
          }
        }
    },[loadingremove]);

    return [favimg,OnChangeFav];
}
