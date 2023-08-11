import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/actions/categoryAction";
import { getAllBrand } from "../../redux/actions/brandAction";
import ViewSearchProdHook from "../Prodact/ViewSearchProdHook";


export default function SidefilterSearchHook() {
 const [item,results,pagenation,getpage,getProdact] =ViewSearchProdHook();
    const dispatch =useDispatch(); 
    useEffect(()=>{
        const get=async()=>{
          await  dispatch(getAllCategory())
          await  dispatch(getAllBrand());
        }
        get();
    },[]);
    const allcat =useSelector((state)=>state.AllCategory.category)
    const allbrand = useSelector(state=>state.AllBrand.brand);
    let category =[];
    if(allcat.data){
     category=allcat.data;
    }
    let brand =[];
    if(allbrand.data){
     brand=allbrand.data;
    }

   const [cheacvalue,setCheacvalue]=useState([]);

   var quereSting ="";

   const onCheakedcategory=(e)=>{
    let value = e.target.value;
   if(value==="0"){
    
      setCheacvalue([]);
   }else{    
      if(e.target.checked === true){
       
        setCheacvalue([...cheacvalue,value]);
       }else if(e.target.checked===false){
        const newarr = cheacvalue.filter((item)=> item !==value)
        
         setCheacvalue(newarr);
       }
   }
 }
useEffect(()=>{
  quereSting= cheacvalue.map((val)=> "category[in][]=" +val).join("&");
  localStorage.setItem("quereString",quereSting);
  setTimeout(() => {
   getProdact();
  },1000);
},[cheacvalue])
 
 
 
  

 const [cheacvaluebrand,setCheacvaluebrand]=useState([]);
 var quereStingbrand ="";
 const onCheakedbrand=(e)=>{
    let value = e.target.value;
   if(value==="0"){
    setCheacvaluebrand([]);
   }else{    
      if(e.target.checked === true){
        setCheacvaluebrand([...cheacvaluebrand,value]);
       }else if(e.target.checked===false){
        const newarr = cheacvaluebrand.filter((item)=> item !==value)
        setCheacvaluebrand(newarr);
       }
   }
  
 }
 useEffect(()=>{
  quereStingbrand= cheacvaluebrand.map((val)=> "brand[in][]=" +val).join("&");
  localStorage.setItem("quereStringbrand",quereStingbrand);
  setTimeout(() => {
   getProdact();
  },1000);
},[cheacvaluebrand])
   
const [from,setFrom]=useState([]);
const [to,setTo]=useState([]);
const pricefrom =(e)=>{
   localStorage.setItem("pricefrom",e.target.value);
   setFrom(e.target.value);
   
}
const priceto =(e)=>{
  localStorage.setItem("priceto",e.target.value);
  setTo(e.target.value);
}
 useEffect(()=>{
  setTimeout(() => {
    getProdact();
   },1000);
 },[from,to])
    return [category,brand,onCheakedcategory,onCheakedbrand,pricefrom,priceto];
}
