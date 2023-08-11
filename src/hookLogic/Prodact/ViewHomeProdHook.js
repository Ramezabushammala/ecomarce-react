import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getALLProdact } from '../../redux/actions/ProdactAction';

export default function ViewHomeProdHook() {
   
    const dispatch =useDispatch();
    const {allprodacts}=useSelector((state)=>state.AllProdact)
   
       useEffect(()=>{
         dispatch(getALLProdact());
          },[])
           let item=[];
           if(allprodacts.data){
             item=allprodacts.data.slice(0,4);
           }else{
             item=[];
           }
           return [item];
}
