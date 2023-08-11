import { useState } from "react";
import notify from '../useNotfiction';
import { useDispatch, useSelector } from "react-redux";
import {  LoginUser } from "../../redux/actions/AutunactionAction";
import { useEffect } from "react";
import { useNavigate} from "react-router-dom"

export default function LoginHook() {
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading,setLoading]=useState(true);
    const [onpress,setOnpress]=useState(false);
    

    const dispatch =useDispatch();
    const Navigat =useNavigate();

    const Onemail = (e) => {
        setEmail(e.target.value);
      };
      const Onpassword = (e) => {
        setPassword(e.target.value);
      };

      const valdition=()=>{
       
         if(email===""){
            notify("Please!...confirmEmail","error"); 
            return;
        }
        else if(password===""){
            notify("Please!...confirmPassward","error");
            return; 
        }}

     const Onsubmit= async (e)=>{
         e.preventDefault();
         valdition();
         setOnpress(true);
         await dispatch(LoginUser({
            email,
            password
       }));
         setOnpress(false);
         setLoading(false);
     }
     const {datalogin}=useSelector((state)=>state.AutuncationReduser);
  
     useEffect(()=>{      
        if(loading===false){
            if(datalogin){
                // console.log(datalogin.data);        
                if(datalogin.data.token){
                    // not storeg object in localStoreg convert to string
                    localStorage.setItem("token",datalogin.data.token)
                    localStorage.setItem("user",JSON.stringify(datalogin.data.data))
                    notify("تمت العملية بنجاح","success")
                    setTimeout(() => {
                        // refrch all page
                        window.location.href = "/";
                     //   Navigat("/");  just inside routes but navbar outside routs becuase name in navbar 
                    }, 1500);
                    
                }else{
                    localStorage.removeItem("token");
                    localStorage.removeItem("user");
                }
                if(datalogin.data.message === "Incorrect email or password"){
                        localStorage.removeItem("token");
                        localStorage.removeItem("user");
                        notify(" كلمة المرور او الايميل خاطئ","error")
                 }
                setLoading(true);   
            }
        }
     },[loading])

     return [email,password,loading,Onemail,Onpassword,Onsubmit,onpress]
}

// if(datalogin.data.message === "Incorrect email or password"){
//     notify(" كلمة المرور او الايميل خاطئ","error")
// }