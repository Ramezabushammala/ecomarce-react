import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import RejsterHook from "../../hookLogic/Auth/RejsterHook";
import { ToastContainer } from "react-toastify";

const Rigester = () => {
  const[name,email,phone,password,confirmPassword,Onusername,Onemail,Onphone,Onpassword,Onconfirmpassword,Onsubmit]=RejsterHook();
  return (
    <Container style={{ minHeight: "680px" }}>
      <Row className="py-5 d-flex justify-content-center hieght-search">
        <Col sm="12" className="d-flex flex-column ">
          <label className="mx-auto title-login">تسجيل حساب جديد</label>
          <input
            value={name}
            onChange={Onusername}
            placeholder="اسم المستخدم..."
            type="text"
            className="user-input mt-3 text-center mx-auto"
          />
          <input
            value={email}
            onChange={Onemail}
            placeholder="الايميل..."
            type="text"
            className="user-input my-3 text-center mx-auto mt-4"
          />
           <input
            value={phone}
            onChange={Onphone}
            placeholder="رقم الجوال..."
            type="text"
            className="user-input my-3 text-center mx-auto "
          />
          <input
          value={password}
          onChange={Onpassword}
            placeholder="كلمه السر..."
            type="password"
            className="user-input text-center mx-auto mt-3"
          />
           <input
           value={confirmPassword}
           onChange={Onconfirmpassword}
            placeholder="تاكيد كلمة السر..."
            type="password"
            className="user-input text-center mx-auto mt-4"
          />
          <button onClick={Onsubmit} className="btn-login mx-auto mt-4">تسجيل الحساب</button>
          <label className="mx-auto my-4">
            لديك حساب بالفعل؟{" "}
            <Link to="/login" style={{ textDecoration: "none" }}>
              <span style={{ cursor: "pointer" }} className="text-danger">
                اضغط هنا
              </span>
            </Link>
          </label>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default Rigester;
