import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrand, getAllBrandPage } from "../../redux/actions/brandAction";

export default function AllBrandPageHook() {
  const brand = useSelector(state=>state.AllBrand.brand);
  const loading =useSelector(state=>state.AllBrand.loading);
  const dispatch=useDispatch();

useEffect(()=>{
    dispatch(getAllBrand(6));
},[])
   let pagecount=0; 
   if(brand.paginationResult){
    pagecount = brand.paginationResult.numberOfPages;
   }
   
const getPage =(page)=>{
 dispatch(getAllBrandPage(page));
  
}

 return [brand ,loading ,getPage,pagecount];
}
