import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getALLProdact, getALLProdactPage } from '../../redux/actions/ProdactAction';

export default function ViewProdactAdminhook() {
   
    const dispatch =useDispatch();
    const {allprodacts}=useSelector((state)=>state.AllProdact)
   
       useEffect(()=>{
         dispatch(getALLProdact(2));
           },[])

           let item=[];
           let pagenation =[];
           let Pagecount =0 ;
           const getpage =async (page)=>{
            await dispatch(getALLProdactPage(page,3));
           }
           try{
       if(allprodacts)
           {
             item=allprodacts;
           }else
           {
             item=[];
           }
             pagenation =item.paginationResult;
            
             if(pagenation)
             {
               Pagecount=pagenation.numberOfPages;
             }
          
           
           }catch(e)
           {

           }
           
           return [item,Pagecount,getpage];
}