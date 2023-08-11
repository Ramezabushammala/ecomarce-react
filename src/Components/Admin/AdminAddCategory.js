import React from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import { ToastContainer } from 'react-toastify';
import AddCategHook from "../../hookLogic/Category/AddCategHook";

const AdminAddCategory = () => {
   const [img,ispress,name,onChangename,loading,handelSubmit,onImageChange] = AddCategHook();
   return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">اضافه تصنيف جديد</div>
        <Col sm="8">
          <div className="text-form pb-2">صوره التصنيف</div>

         <div>
          <label for="upload-photo">
          <img 
          src={img} 
          alt="fix" 
          height="100px" 
          width="120px"
          style={{cursor:"pointer"}}/>
          </label>
          <input
           type="file"
           name="photo"
           onChange={onImageChange}
           id="upload-photo"
          />
         </div>

          
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم التصنيف"
            onChange={onChangename}
            value={name}
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={handelSubmit} className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
        </Col>
      </Row>
      {
        ispress ? loading ? <Spinner animation="grow" variant="primary" />: <h1> ending.... </h1>:null
        
      }
       {
       <ToastContainer />
      }
    </div>
  );
};
export default AdminAddCategory;
