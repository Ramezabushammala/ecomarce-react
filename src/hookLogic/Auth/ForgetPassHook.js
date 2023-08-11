import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import notify from "../useNotfiction";
import { ForgetPassword } from "../../redux/actions/AutunactionAction";
import { useEffect } from "react";


export default function ForgetPassHook() {
   
    const [email, setEmail] = useState("");
    const [loading,setLoading]=useState(true);
 
    const dispatch =useDispatch();
    const Navigat =useNavigate();

    const Onemail = (e) => {
        setEmail(e.target.value);
      };

      const Onsubmit =async(e)=>{
        e.preventDefault();
        if(email===""){
            notify("Please Cheak Email...!!","error")
            return;
        }
       setLoading(true);
      await dispatch(ForgetPassword(
            email,
        ))
        setLoading(false);
      }
      const {dataforget}=useSelector((state)=>state.AutuncationReduser);
      useEffect(()=>{
           if(loading===false){
               if(dataforget){
                console.log(dataforget);
               if(dataforget.data.status==="success"){
                notify("تم ارسال كود الى الايميل","success")
               }else if(dataforget.data.status==="fail"){
                notify("هناك خطا في البيانات","error");
               }
           }
       }},[loading])
    
      return [email,Onemail,Onsubmit]
}
