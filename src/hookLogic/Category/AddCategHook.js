import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createCategory } from '../../redux/actions/categoryAction';
import notify from '../useNotfiction';
import avatar from "../../images/avatar.png";
export default function AddCategHook() {
 
  const [img ,setImg]=useState(avatar);
  const [name ,setName]=useState('');
  const [selectedfile ,setSelectedfile]=useState(null);
  const [loading ,setLoading]=useState(true);
  const [ispress,setIspress]=useState(false);
  const dispatch =useDispatch();

 // to change name state 
 const onChangename =(e)=>{
     setName(e.target.value);
 }

  // when image change save it
  const onImageChange =(e)=>{
    if(e.target.files && e.target.files[0]){ // عملنا هنا الشرط عشان ممكن يضغط وما يحتار صورة 
      setImg(URL.createObjectURL(e.target.files[0])) // هنا تخزن كصورة 
      setSelectedfile(e.target.files[0]); // هنا تخزن كمسار 
    }
  }
  // save data in database
  const res =useSelector((state)=>state.AllCategory.category)

  const handelSubmit =async(e)=>{
    e.preventDefault();

    if(name==="" || selectedfile===null){
       
      notify("please enter information","warn");
        return ;
    }
    
    const formData =new FormData (); // لجلب بيانات وملفات كصور  
    formData.append("name" ,name) // "name" هاي تاعت الاوبجكت المحزن في لبوست مان
    formData.append("image",selectedfile);  // "image" """"""""
     setLoading(true)
     setIspress(true)
     await dispatch(createCategory(formData))
     setLoading(false);
    // const res = axios.post("http://127.0.0.1:8000/api/v1/categories" ,{name:'ramez' ,age:'22'})   في حال ببعت بيانات عادية مش صور هيك الاوبجكت 

  }
 
  useEffect(()=>{
    if (loading===false){
      setImg(avatar)
      setName("")
      setSelectedfile(null)
      console.log("ending....")
      setLoading(true)
     setTimeout(()=> setIspress(false),2000);
     // حطينا الشرط هنا عشان بدي اخر حالة لو كانت برا اليوزايفكت مش هتزبط وتطبع الي قبل 
     if(res.status === 201){
      notify("add sucessful","success");
    }else{
      notify("add field","error");
    }
    }
  },[loading])
    
  return[img,ispress,name,onChangename,loading,handelSubmit,onImageChange]
}
