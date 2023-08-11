import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getALLProdactID, getALLProdactLike } from "../../redux/actions/ProdactAction";
import mobile from "../../images/mobile.png";
import { getOneCategory } from "../../redux/actions/categoryAction";
import { getOneBrand } from "../../redux/actions/brandAction";

export default function ViewDateilsHook() {
    const {id}=useParams();
    // useParams get any parmetar in url 
    const dispatch =useDispatch();
    const {prodactID}=useSelector((state)=>state.AllProdact)
    const {onecategory}=useSelector((state)=>state.AllCategory)
    const {onebrand}=useSelector((state)=>state.AllBrand)
    const {likeProdact}=useSelector((state)=>state.AllProdact)
    useEffect(()=>{
      dispatch(getALLProdactID(id));
    
    },[]);
    
    let images =[];
    let item =[];
  
    if(prodactID.data){
      item=prodactID.data;
      images=item.images.map((img)=> {
      return {original: img}
    })
    }else{
      item=[];
      images =[{original: `${mobile}`}];
    }
    useEffect(()=>{
      if(item.category){
        dispatch(getOneCategory(item.category));
      }
      if(item.brand){
        dispatch(getOneBrand(item.brand));
      }
      if(item.category){
        dispatch(getALLProdactLike(item.category));
      }
    },[item]);
    
    let cat=[];
    if(onecategory.data){
      cat=onecategory.data
    }else{
      cat=[];
    }

    let brandd=[];
    if(onebrand.data){
      brandd=onebrand.data
    }else{
      brandd=[];
    }
     
    let likepro=[];
    if(likeProdact.data){
      likepro=likeProdact.data.slice(0,4);
    }else{
      likepro=[];
    }
    return [images,item,cat,brandd,likepro];
}
