import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function RatePostHook() {
  
    // const [comment, setComment] = useState("");
    const [ratevalue, setRatevalue] = useState(0);
    const [ratetext,setRatetext]=useState("");
    const [loading,setLoading]=useState(true);

    const dispatch =useDispatch();
    const Navigat =useNavigate();

    const OnChangeComment = (e) => {
        setRatetext(e.target.value);
      };
      const OnChangeRate = (val) => {
       setRatevalue(val);
      };
      var user =""
      if(localStorage.getItem("user")){
        user=JSON.parse(localStorage.getItem("user"));
      }

      const Onsubmit =(e)=>{
        e.preventDefault();
      }
      return [OnChangeComment,OnChangeRate,ratevalue,ratetext,user,Onsubmit]
}
