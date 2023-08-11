import { useState } from "react";
import ViewSearchProdHook from "../Prodact/ViewSearchProdHook";
import { useEffect } from "react";


export default function SearchWordHook() {
   const[searchword,setSearhword] =useState('');
   const [item,results,pagenation,getpage,getProdact]=ViewSearchProdHook();
   const onSearchword =(e)=>{
      localStorage.setItem("searchword", e.target.value);
    setSearhword(e.target.value);
         const path = window.location.pathname;
         if(path!=="/products"){
            window.location.href = "/products";
         }
   }
   useEffect(()=>{
      setTimeout(()=>{
         getProdact();
      },1000)
     
   },[searchword])


   return [searchword,setSearhword,onSearchword]
}
