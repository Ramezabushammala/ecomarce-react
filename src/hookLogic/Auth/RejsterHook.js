import { useState } from "react";
import notify from '../useNotfiction';
import { useDispatch, useSelector } from "react-redux";
import { CreateNewaccount } from "../../redux/actions/AutunactionAction";
import { useEffect } from "react";
import { useNavigate} from "react-router-dom"
export default function RejsterHook() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [loading,setLoading]=useState(true);

  const Onusername = (e) => {
    setName(e.target.value);
  };
  const Onemail = (e) => {
    setEmail(e.target.value);
  };
  const Onphone = (e) => {
    setPhone(e.target.value);
  };
  const Onpassword = (e) => {
    setPassword(e.target.value);
  };
  const Onconfirmpassword = (e) => {
    setConfirmPassword(e.target.value);
  };
   
  

  const valdition=()=>{
    if (password !== confirmPassword) {
       notify("Please!...confirmPassward","error"); 
       return;
    }else if(name===""){
        notify("Please!...confirmname","error"); 
        return;
    }
    else if(email===""){
        notify("Please!...confirmEmail","error"); 
        return;
    }
    else if(password==="" || password.length < 6){
        notify("Please!...confirmPassward","error");
        return; 
    }
    else if(confirmPassword===""){
        notify("Please!...confirmConfirmPassward","error"); 
        return;
    }
    else if(phone==="" || phone.length < 11 || !phone.startsWith("010")){
        notify("Please!...confirmPhone","error"); 
        return;
    }
  }
      
  const dispatch =useDispatch();
  const Navigat =useNavigate();
  const {datasignUp}=useSelector((state)=>state.AutuncationReduser);
 
  const Onsubmit = async (e) => {
    e.preventDefault();
    valdition();
    setLoading(true);
   await dispatch(CreateNewaccount(
        {
            name,
            email,
            password,
            passwordConfirm:confirmPassword,
            phone
        }
    ))
    setLoading(false);  
  }
  useEffect(()=>{
      if(loading===false){
        if(datasignUp){
          // console.log(datasignUp);
          if(datasignUp.data.token){
            localStorage.setItem("token",datasignUp.data.token)
            notify("تم تسجيل الدخول بنجاح","success");
            setTimeout(() => {
              Navigat("/login");
            }, 2000);    
          }
          if(datasignUp.data.errors){
            if(datasignUp.data.errors[0].msg){
              notify(datasignUp.data.errors[0].msg,"error");
            }
          }
      }}},[loading]);

  return [name,email,phone,password,confirmPassword,Onusername, Onemail, Onphone, Onpassword, Onconfirmpassword,Onsubmit];
}
