import React from "react";
import { Row, Col,Spinner } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import AddBrandHook from "../../hookLogic/Brand/AddBrandHook";
const AdminAddBrand = () => {

  const [img,ispress,name,onChangeName,loading,handelSubmit,onChangeImage] =AddBrandHook();
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">اضف ماركه جديده</div>
        <Col sm="8">
          <div className="text-form pb-2">صوره الماركه</div>
          <label for="upload-photo">
          <img 
          src={img} 
          alt="" 
          height="100px" 
          width="120px"
          style={{cursor:"pointer"}} />
          </label>
          <input type="file"
           name="image" 
           id="upload-photo"
           onChange={onChangeImage}/>
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم الماركه"
            onChange={onChangeName}
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

export default AdminAddBrand;
