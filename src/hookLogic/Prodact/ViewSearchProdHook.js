import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getALLProdact, getALLProdactPage, getSearchProdact } from '../../redux/actions/ProdactAction';

export default function ViewSearchProdHook() {
   
    const dispatch =useDispatch();
    const {allprodacts}=useSelector((state)=>state.AllProdact)
    const limit =8;
   
        const getProdact = async()=>{
            getStorge();
            sortData();
           await dispatch(getSearchProdact(`sort=${sort}&limit=${limit}${pricefromquere}${pricetoquere}&keyword=${word}&${quereSting}&${quereStingbrand}`));  
          //  console.log(word)
        }
       useEffect(()=>{
         getProdact('');
           },[])
           
     let typesort="" ,sort;
      const sortData=()=>{
        if( localStorage.getItem("sortType")!==null){
          typesort =localStorage.getItem("sortType");
        }else{
          typesort=""
        }

        
       if(typesort==="السعر من الاقل للاعلى"){
           sort ="+price"
       }else if(typesort==="السعر من الاعلى للاقل"){
            sort="-price"
       }
      }



           let item=[];
           let results=0;
           let pagenation=[];
           try{
              
            if(allprodacts.data){
              item=allprodacts.data;
            }else{
              item=[];
            }
           }catch(e){

           }
           try{
              
            if(allprodacts.results){
              results=allprodacts.results;
            }else{
              results=0;
            }
           }catch(e){

           }
          
           try{
            if(allprodacts.paginationResult){
              pagenation=allprodacts.paginationResult.numberOfPages;
             }else{
              pagenation=[];
             }
           }catch{

           }
          
           
           const getpage =async (page)=>{
           
                getStorge();
                sortData();
            await dispatch(getSearchProdact(`sort=${sort}&limit=${limit}${pricefromquere}${pricetoquere}&page=${page}&keyword=${word}&${quereSting}&${quereStingbrand}`));
           }


           let word ='',from ='',to ='',pricefromquere,pricetoquere,quereSting="",quereStingbrand ='' ;
          
           const getStorge =()=>{
        if(localStorage.getItem("searchword") !=null)
                word =localStorage.getItem("searchword");
                
                if(localStorage.getItem("quereString") !=null)
                quereSting =localStorage.getItem("quereString");

           if(localStorage.getItem("quereStringbrand") !=null)
            quereStingbrand =localStorage.getItem("quereStringbrand");

            
          if(localStorage.getItem("pricefrom") !=null)
              from =localStorage.getItem("pricefrom");

              
              if(localStorage.getItem("priceto") !=null)
                 to =localStorage.getItem("priceto");
       // price is normal integr or "" 
                  if(from===0 || from <=0 ){
                    pricefromquere=""
                  }else{
                    pricefromquere=`&price[gte]=${from}`
                  }
                  
                  if(to===0 || to<=0 ){
                    pricetoquere=""
                  }else{
                    pricetoquere=`&price[lte]=${to}`
                  }
       }
           return [item,results,pagenation,getpage,getProdact];
}