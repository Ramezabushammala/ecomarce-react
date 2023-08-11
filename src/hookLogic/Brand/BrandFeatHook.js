import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrand } from "../../redux/actions/brandAction";



export default function BrandFeatHook() {
 
    const dispatch =useDispatch(); 
    useEffect(()=>{
      dispatch(getAllBrand())
    },[])
    const brand =useSelector((state)=>state.AllBrand.brand)
    const load =useSelector((state)=>state.AllBrand.loading)
     
    return [brand,load]
}