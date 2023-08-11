import React from "react";
import { Row } from "react-bootstrap";
import CardProductsContainer from "../Products/CardProductsContainer";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AllWishList } from "../../redux/actions/WishListAction";

const UserFavoriteProduct = () => {
  const [loading,setLoading]=useState(true);
  const [item,setItem]=useState([]);
 
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
       setItem(userfav);  
      }}
    }catch(e){   
    }    
  },[loading]);

  return (
    <Row className="justify-content-between ">
      <div className="admin-content-text">المنتجات المفضله</div>
      <Row className="justify-content-between ">
          <CardProductsContainer  prodacts={item} title="" btntitle="" />
      </Row>
    </Row>
  );
};

export default UserFavoriteProduct;
