import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import avatar from "../../images/avatar.png";
import { createBrand } from "../../redux/actions/brandAction";
import notify from "../useNotfiction";
export default function AddBrandHook() {
    const [img ,setImg]=useState(avatar);
    const [name ,setName]=useState('');
    const [selectedfile ,setSelectedfile]=useState(null);
    const [loading ,setLoading]=useState(true);
    const [ispress,setIspress]=useState(false);
    const dispatch =useDispatch();

  const onChangeImage =(e)=>{
    
    if(e.target.files && e.target.files[0]){

    setImg(URL.createObjectURL(e.target.files[0]))
    setSelectedfile(e.target.files[0]);
    }

  }

  const onChangeName =(e)=>{
    setName(e.target.value)
  }

  const res =useSelector((state)=>state.AllBrand.brand)

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
     await dispatch(createBrand(formData))
     setLoading(false);
    // const res = axios.post("http://127.0.0.1:8000/api/v1/categories" ,{name:'ramez' ,age:'22'})   في حال ببعت بيانات عادية مش صور هيك الاوبجكت 

  }

  useEffect(()=>{
    if (loading===false){
      setImg(avatar)
      setName("")
      setSelectedfile(null)
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
 
  return [img,ispress,name,onChangeName,loading,handelSubmit,onChangeImage]
}
