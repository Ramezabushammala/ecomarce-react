import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginHook from "../../hookLogic/Auth/LoginHook";
import { ToastContainer } from "react-toastify";

const LoginPage = () => {

   const [email,password,loading,Onemail,Onpassword,Onsubmit,onpress] =LoginHook();
  return (
    <Container style={{ minHeight: "680px" }}>
      <Row className="py-5 d-flex justify-content-center ">
        <Col sm="12" className="d-flex flex-column ">
          <label className="mx-auto title-login">تسجيل الدخول</label>
          <input
            value={email}
            onChange={Onemail}
            placeholder="الايميل..."
            type="text"
            className="user-input my-3 text-center mx-auto"
          />
          <input
          value={password}
          onChange={Onpassword}
            placeholder="كلمه السر..."
            type="password"
            className="user-input text-center mx-auto"
          />
          <button onClick={Onsubmit} className="btn-login mx-auto mt-4">تسجيل الدخول</button>
          <label className="mx-auto my-3">
            ليس لديك حساب ؟{" "}
            <Link to="/register" style={{ textDecoration: "none" }}>
              <span style={{ cursor: "pointer" }} className="text-danger">
                اضغط هنا
              </span>
            </Link>
          </label>
          
          <label className="mx-auto my-0">
            <Link to="/user/forgetPass" style={{ textDecoration: "none" }}>
              <span style={{ cursor: "pointer" }} className="text-danger">
               هل نسيت كلمة السر ؟
              </span>
            </Link>
          </label>
        </Col>
        {
          onpress===true?(loading===true?(<div class="spinner-grow" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>):null):null
        }
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default LoginPage;
