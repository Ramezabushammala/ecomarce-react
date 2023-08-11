import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory, getAllCategoryPage } from "../../redux/actions/categoryAction";


export default function AllCatgPageHook() {
    const dispatch =useDispatch(); 
    useEffect(()=>{
      dispatch(getAllCategory(6))
    },[]);
    const category =useSelector((state)=>state.AllCategory.category)
    const load =useSelector((state)=>state.AllCategory.loading)
    // console.log(category.data)
    //  console.log(load)
    let Pagecount =0;
    if(category.paginationResult){
      Pagecount=category.paginationResult.numberOfPages;
    }
    
    const getPage =(page)=>{
     dispatch(getAllCategoryPage(page));
    }
    return [load ,category ,Pagecount ,getPage]

}
