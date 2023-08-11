import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllBrand } from "../../redux/actions/brandAction";
import { useState } from "react";
import { getAllCategory } from "../../redux/actions/categoryAction";
import { getALLSUBCATEGORY } from "../../redux/actions/subCategAction";
import { CreateProdact } from "../../redux/actions/ProdactAction";
import notify from "../../hookLogic/useNotfiction";

export default function AddProdactHook() {
    const [prodname,setProdname]=useState("");
    const [prodiscrb,setProdiscrb]=useState("");
    const [pricebefor,setPricebefor]=useState("السعر قبل الخصم");
    const [priceafter,setPriceafter]=useState("السعر بعد الخصم");
    const [qty,setQty]=useState("الكمية المتاحة للمنتج");
    const [catId,setCatid]=useState('');
    const [brandid,setBrandid]=useState('');
    const [subCatid,setSubCatid]=useState([]);
    const [loadind,setLoading]=useState(true);
    const [selectsubCatid,setSelectubCatid]=useState([]);
    const [showcolor,setShowcolor]=useState(false);
    const [colors, setColors] = useState([]);
    const [images, setImages] = useState([]);
    const [options, setOptions] = useState([]);
   const dispatch=useDispatch();
  
    const handelnameprodact =(e)=>{
        setProdname(e.target.value)
    }
    const handeldaescrprodact =(e)=>{
        setProdiscrb(e.target.value)
    }
    const handelpricbeforprodact =(e)=>{
        setPricebefor(e.target.value)
        
    }
    const handelpricafterprodact =(e)=>{
        setPriceafter(e.target.value)
    }
    const handelQTYprodact =(e)=>{
        setQty(e.target.value)
    }
    // const handelsetimagelibr =()=>{
    //    setImages()
    // }
   
    
 // selectedList parmeter bltin library multselected
   const onSelect = (selectedList) => {
     setSelectubCatid(selectedList);
     // console.log(selectedList)
   };
  
   const onRemove = (selectedList, removedItem) => {
     setSelectubCatid(selectedList);
     // console.log(selectedList)
   };
    
      useEffect(()=>{
     //  setLoadingg(loading);
     dispatch(getAllBrand());
     dispatch(getAllCategory());
     dispatch(getAllCategory());
     
     //setLoadingg(loading);
    },[]);
    
    
   const {brand}=useSelector((state)=>state.AllBrand)
   const {loading}=useSelector((state)=>state.AllBrand)
   const {category}=useSelector((state)=>state.AllCategory)
   const {subcategory}=useSelector((state)=>state.SubCategory);
   const {prodacts}=useSelector((state)=>state.AllProdact);
   const handelselectcat = async(e)=>{  
     if(e.target.value !==0){
     await dispatch(getALLSUBCATEGORY(e.target.value));
     }
     setCatid(e.target.value);
   }
    useEffect(()=>{
        if(catId!==0){
         if(subcategory){
           setOptions(subcategory.data)
         }
        }
    },[catId])
     
 
   const handelselectbrand =(e)=>{
     setBrandid(e.target.value);
   }
 
   const handelcolor =()=>{
     setShowcolor(!showcolor)
   }
   const handelChangecComplete=(color)=>{
     // parmeter color bltin in library onChangeComplete below
     setColors([...colors,color.hex])
     setShowcolor(!showcolor)
   }
   
   const removeColor = (color)=>{
    const newcolor =colors.filter((e)=> e !== color)
    setColors(newcolor);
   }
   // console.log(colors)
   //convert image base64 to file
   function dataURLtoFile(dataurl, filename) {
  
     var arr = dataurl.split(','),
         mime = arr[0].match(/:(.*?);/)[1],
         bstr = atob(arr[1]), 
         n = bstr.length, 
         u8arr = new Uint8Array(n);
         
     while(n--){
         u8arr[n] = bstr.charCodeAt(n);
     }
     
     return new File([u8arr], filename, {type:mime});
 }
 
   const handelSubmitdata =async(e)=>{
     e.preventDefault();
      if(prodname===""||prodiscrb===""||catId===''||images.length<=0){
          notify("valdit from information","warn")
          return;
      }
     const img = dataURLtoFile(images[0],Math.random()+".png")
     const formData =new FormData ();
 
     //convert array image base64 to file
     const itemimages =Array.from(Array(Object.keys(images).length).keys()).map(
       (item,index)=>{
         return dataURLtoFile(images[index],Math.random()+".png")
       })
     
     formData.append("images",itemimages)
     formData.append("title",prodname)
     formData.append("description",prodiscrb)
     formData.append("quantity",qty)
     formData.append("price",pricebefor)
      formData.append("imageCover",img)
      formData.append("category",catId)
      formData.append("brand",brandid)
      formData.append("sold",priceafter)
      // just formdata no send array send value value
      colors.map((color)=>{
      return formData.append("availableColors",color)
     })   
      selectsubCatid.map((item)=>formData.append("subcategory",item._id))   
     
      itemimages.map((item)=>formData.append("images",item))  
      setLoading(true);
      await dispatch(CreateProdact(formData));
      setLoading(false);
    }
    useEffect(()=>{
      if(loadind===false){
          setCatid('اختر التصنيف الرئيسي');
          setProdname('')
          setColors('');
          setBrandid(0);
          setImages([]);
          setOptions([]);
          setPriceafter("السعر بعد الخصم");
          setPricebefor("السعر قبل الخصم");
          setProdiscrb('');
          setQty("الكمية المتاحة للمنتج")
         setTimeout(()=>setLoading(true),1500) 
 
         if(prodacts.status===201){
           notify("add succssful","success")
         }else{
           notify("add failed","error")
         }
      }
    },[loadind])
   const info ={prodname,priceafter,pricebefor,prodiscrb,prodacts,images,qty,loading,category,options,brand,colors,
    showcolor,handelselectcat,onSelect,onRemove,handelselectbrand,removeColor,handelcolor,handelChangecComplete,handelSubmitdata,
    handelnameprodact,handeldaescrprodact,handelpricbeforprodact,handelpricafterprodact,handelQTYprodact,setImages};
    
    
    return info;
}
