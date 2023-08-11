import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/actions/categoryAction";


export default function HomeCatgHook() {
 
    const dispatch =useDispatch(); 
    useEffect(()=>{
      dispatch(getAllCategory())
    },[])
    const category =useSelector((state)=>state.AllCategory.category)
    const load =useSelector((state)=>state.AllCategory.loading)
     
    const colors =["#ffd3e8","#f4dba5","#55cfdf","#ff6262","#0034ff","#ffd3e8"]
    
    return [category,load,colors]
}
