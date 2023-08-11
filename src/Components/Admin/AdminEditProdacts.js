import Multiselect from 'multiselect-react-dropdown';
import React from 'react'
import { Col, Row, ToastContainer } from 'react-bootstrap';
import { CompactPicker } from 'react-color';
import add from "../../images/add.png";
import MultiImageInput from 'react-multiple-image-input';
import { useParams } from 'react-router-dom';
import EditProdactHook from '../../hookLogic/Prodact/EditProdactHook';
function AdminEditProdacts() {
  const {id} =useParams(); 
   const info =EditProdactHook(id);
  return (
    <div>

     <Row className="justify-content-start ">
      <div className="admin-content-text pb-4">تعديل المنتج</div>
      <Col sm="8">
        <div className="text-form pb-2"> صور للمنتج</div>
        <MultiImageInput
            cropConfig={{ minWidth: 100 }}
            images={info.images}
            setImages={info.setImages}
            allowCrop={false}
            theme={"light"}
            max={5}
             />
         <input 
          value={info.prodname}
          onChange={info.handelnameprodact}
          type="text"
          className="input-form d-block mt-3 px-3"
          placeholder="اسم المنتج"
        />
        <textarea
        value={info.prodiscrb}
        onChange={info.handeldaescrprodact}
          className="input-form-area p-2 mt-3"
          rows="4"
          cols="50"
          placeholder="وصف المنتج"
        />
        <input
          value={info.pricebefor}
          onChange={info.handelpricbeforprodact}
          type="number"
          className="input-form d-block mt-3 px-3"
          placeholder="السعر قبل الخصم"
        />
        <input
        value={info.priceafter}
        onChange={info.handelpricafterprodact}
          type="number"
          className="input-form d-block mt-3 px-3"
          placeholder="سعر بعد الخصم "
        />
         <input
          value={info.qty}
          onChange={info.handelQTYprodact}
          type="number"
          className="input-form d-block mt-3 px-3"
          placeholder="الكمية المتاحة للمنتج"
        />
        <select
          value={info.catId}
          onChange={info.handelselectcat}
          name="categorys"
          className="select input-form-area mt-3 px-2 ">
          <option value="0" hidden> اختر التصنيف الرئيسي</option>
          {
              info.loading===false ?(
                info.category.data ?(
                  info.category.data.map((item,index)=>{
                   return <option key={index} value={item._id}>{item.name}</option>
                  }) 
                   ):null
              ):<h1>loading...</h1>
            }
        </select>
              <Multiselect
                //  value={info.selectsubCatid}
                 className="mt-2 text-end"
                 placeholder="التصنيف الفرعي"
                 options={info.options}
                 onSelect={info.onSelect}
                 onRemove={info.onRemove}
                 displayValue="name"
                 style={{ color: "red" }}
               />
        <select
         value={info.brandid}
         onChange={info.handelselectbrand}
          name="brand"
          // id="brand"
          className="select input-form-area mt-3 px-2 ">
            <option value="0" hidden>اختر الماركة</option>
            {
              info.loading===false ?(
                info.brand.data ?(
                  info.brand.data.map((item,index)=>{
                   return <option key={index} value={item._id}>{item.name}</option>
                  }) 
                   ):null
              ):<h1>loading...</h1>
            }
          
        </select>
        <div className="text-form mt-3 "> الالوان المتاحه للمنتج</div>
        <div className="mt-1 d-flex">

          {
            info.colors.length>=1 ?(
              info.colors.map((color,index)=>{
                return  <div key={index}
                onClick={()=>info.removeColor(color)}
                className="color ms-2 border  mt-1"
                style={{ backgroundColor: color }}></div>
              })
            ):null
          }
       
          <img src={add} onClick={info.handelcolor} alt="" width="30px" height="35px" style={{cursor:"pointer"}} />
            {
              info.showcolor===true?(<CompactPicker onChangeComplete={info.handelChangecComplete}/>):null
            }
        </div>
      </Col>
    </Row>
    <Row>
      <Col sm="8" className="d-flex justify-content-end ">
        <button onClick={info.handelSubmitdata} className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
      </Col>
      <ToastContainer />
    </Row> 
  </div>
  )
}

export default AdminEditProdacts
