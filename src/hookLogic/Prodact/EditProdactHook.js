import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllBrand } from "../../redux/actions/brandAction";
import { useState } from "react";
import { getAllCategory } from "../../redux/actions/categoryAction";
import { getALLSUBCATEGORY } from "../../redux/actions/subCategAction";
import {getALLProdactID, UbdateProdact } from "../../redux/actions/ProdactAction";
import notify from "../../hookLogic/useNotfiction";

export default function EditProdactHook(id) {
 
  const dispatch=useDispatch();
  useEffect(()=>{
    const run =async()=>
    {
   await dispatch(getALLProdactID(id));
   await dispatch(getAllBrand());
   await dispatch(getAllCategory());
    }
    run();
    
   },[]);
   
    const {prodactID}=useSelector((state)=>state.AllProdact)
    const [prodname,setProdname]=useState("");
    const [prodiscrb,setProdiscrb]=useState("");
    const [pricebefor,setPricebefor]=useState("السعر قبل الخصم");
    const [priceafter,setPriceafter]=useState("السعر بعد الخصم");
    const [qty,setQty]=useState("الكمية المتاحة للمنتج");
    const [catId,setCatid]=useState('');
    const [brandid,setBrandid]=useState('');
    const [loadind,setLoading]=useState(true);
    const [selectsubCatid,setSelectubCatid]=useState([]);
    const [showcolor,setShowcolor]=useState(false);
    const [colors, setColors] = useState([]);
    const [images, setImages] = useState([]);
    const [options, setOptions] = useState([]);
  
  
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
    
 // selectedList parmeter bltin library multselected
   const onSelect = (selectedList) => {
     setSelectubCatid(selectedList);
     
   };
  
   const onRemove = (selectedList, removedItem) => {
     setSelectubCatid(selectedList);
    
   };
    
    // Update product name when product ID changes
          useEffect(()=>{
            
            if(prodactID.data)
            {
             setImages(prodactID.data.images)
             setProdname(prodactID.data.title)
             setProdiscrb(prodactID.data.description)
             setPricebefor(prodactID.data.price)
             setQty(prodactID.data.quantity)
             setCatid(prodactID.data.category)
             setBrandid(prodactID.data.brand)
             setColors(prodactID.data.availableColors)
             setSelectubCatid(prodactID.data.subcategory)
            }
          },[prodactID])
    
   const {brand}=useSelector((state)=>state.AllBrand)
   const {loading}=useSelector((state)=>state.AllBrand)
   const {category}=useSelector((state)=>state.AllCategory)
   const {subcategory}=useSelector((state)=>state.SubCategory);
   const {ubdateprodact}=useSelector((state)=>state.AllProdact);
   
   const handelselectcat = async(e)=>
   {  
     setCatid(e.target.value);
   }

    useEffect(()=>
    {
         
        // eslint-disable-next-line eqeqeq
        if(catId != 0){
            
            const run =async()=>{
                await dispatch(getALLSUBCATEGORY(catId));
                
           }
          run();
        }
    },[catId])
     
    useEffect(()=>{
        if(subcategory)
        {
          setOptions(subcategory.data)
        }
    },[subcategory])
 
   const handelselectbrand =(e)=>
   {
     setBrandid(e.target.value);
   }
 
   const handelcolor =()=>
   {
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
     //convert url to file
     const convertURLtoFile = async (url) => {
      const response = await fetch(url, { mode: "cors" });
      const data = await response.blob();
      const ext = url.split(".").pop();
      const filename = url.split("/").pop();
      const metadata = { type: `image/${ext}` };
      return new File([data], Math.random(), metadata);
  };

   const handelSubmitdata =async(e)=>{
    
     e.preventDefault();
       if(prodname===""||prodiscrb===""||catId===''||images.length<=0){
           notify("valdit from information","warn")
           return;
       }

       let imgCover;
       if (images[0].length <= 1000) {
           convertURLtoFile(images[0]).then(val => imgCover = val)
       } else {
           imgCover = dataURLtoFile(images[0], Math.random() + ".png")
       }

       let itemImages = []
       //convert array of base 64 image to file 
       Array.from(Array(Object.keys(images).length).keys()).map(
           (item, index) => {
               if (images[index].length <= 1000) {
                   convertURLtoFile(images[index]).then(val => itemImages.push(val))
               }
               else {
                   itemImages.push(dataURLtoFile(images[index], Math.random() + ".png"))
               }
           })
    
       const formData = new FormData();

      formData.append("title",prodname)
      formData.append("description",prodiscrb)
      formData.append("quantity",qty)
      formData.append("price",pricebefor) 
      formData.append("category",catId)
      formData.append("brand",brandid)
      formData.append("sold",priceafter)
      // just formdata no send array send value value
      setTimeout(()=>{
        formData.append("imageCover",imgCover)
        itemImages.map((item)=>formData.append("images",item)) 
      },1000) 

      colors.map((color)=>{
      return formData.append("availableColors",color)
     })   
      selectsubCatid.map((item)=>formData.append("subcategory",item._id))   
    
      setTimeout(async()=>{
        await dispatch(UbdateProdact(id,formData));
        setLoading(false);
      },1000)  
    }

    useEffect(()=>{
      if(loadind===false){
          setCatid('اختر التصنيف الرئيسي');
          setProdname('')
          setColors([]);
          setBrandid('اختر الماركة');
          setImages([]);
          setOptions([]);
          setPriceafter("السعر بعد الخصم");
          setPricebefor("السعر قبل الخصم");
          setProdiscrb('');
          setQty("الكمية المتاحة للمنتج")
          setSelectubCatid([])
         setTimeout(()=>setLoading(true),1500) 

         if(ubdateprodact.status===200){
           notify("add succssful","success")
         }else{
           notify("add failed","error")
         }
      }
    },[loadind])

   const info ={prodname,priceafter,pricebefor,prodiscrb,catId,brandid,ubdateprodact,images,qty,loading,category,options,brand,colors,
    showcolor,selectsubCatid,handelselectcat,onSelect,onRemove,handelselectbrand,removeColor,handelcolor,handelChangecComplete,handelSubmitdata,
    handelnameprodact,handeldaescrprodact,handelpricbeforprodact,handelpricafterprodact,handelQTYprodact,setImages};
    
    return info;
   }