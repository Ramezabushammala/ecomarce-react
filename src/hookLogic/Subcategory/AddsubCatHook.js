import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/actions/categoryAction";
import { CreateSupCategory } from "../../redux/actions/subCategAction";
import notify from "../useNotfiction";


export default function AddsubCatHook() {
   
    const [id ,setId]=useState("0");
    const [name ,setName]=useState("");
    const [loading ,setLoading]=useState(true);
    const dispatch =useDispatch();
    const category =useSelector((state)=>state.AllCategory.category) 
    useEffect(()=>{
        if(!navigator.onLine){
            notify(" هناك مشكلة في اتصال الانترنت","warn");
            return;
          }
      dispatch(getAllCategory());
    },[])
  
    const handelChange =(e)=>{
      setId(e.target.value)
    }
  
    const handelSubmit =async(e)=>{
      e.preventDefault();
// cheak internet 
      
      if(id==="0"){
        notify("من فضلك اختر تصنيف رئيسي","warn");
       return;
     }
      if(name===""){
        notify("من فضلك ادخل تصنيف فرعي","warn");
       return;
     } 
      setLoading(true);
      await dispatch(CreateSupCategory(
        {
          name, 
          //modern js name=name
          category:id
       }
      ));
      setLoading(false)
    }
  
     const res =useSelector((state)=>state.SubCategory.subcategory)
    
    useEffect(()=>{
      if (loading===false){
        setName("")
        setId("0")
        setLoading(true)
       // حطينا الشرط هنا عشان بدي اخر حالة لو كانت برا اليوزايفكت مش هتزبط وتطبع الي قبل 
       if(res.status === 201){
        notify("add sucessful","success");
      }
         else if(res === "errorError: Request failed with status code 400"){  
         notify("هذا الاسم مستخدم ","error")
        }
      else{
        notify("add field","error");
      }
      }
    },[loading])
  
    const handelChangename=(e)=>{
      setName(e.target.value)
    }

    return [id,name,category,loading,res,handelChange,handelSubmit,handelChangename]
}
