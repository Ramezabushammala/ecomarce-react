import { useEffect } from "react";
import { useState } from "react";



export default function ProtectRouterHook() {
    
    const [userData,setUserData]=useState(JSON.parse(localStorage.getItem("user")));
    const [isuser,setIsuser]=useState();
    const [isadmin,setIsadmin]=useState();
useEffect(()=>{
  if(userData!=null){
    if(userData.role==="user"){
        setIsuser(true);
        setIsadmin(false);
    }else{
        setIsuser(false);
        setIsadmin(true);
    }
  }else{
    setIsuser(false);
    setIsadmin(false);
  }
},[])
 
  return [isuser,isadmin];
}
