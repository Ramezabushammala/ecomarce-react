import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import ForgetPassHook from '../../hookLogic/Auth/ForgetPassHook'

export default function ForgetPassPage() {
  const [email,Onemail,Onsubmit] =ForgetPassHook();
  return (
    <Container style={{ minHeight: "680px" }}>
    <Row className="py-5 d-flex justify-content-center ">
      <Col sm="12" className="d-flex flex-column ">
        <label className="mx-auto title-login">نسيت كلمة المرور</label>
        <input
          value={email}
          onChange={Onemail}
          placeholder="ادخل الايميل...."
          type="text"
          className="user-input my-3 text-center mx-auto"
        />
        <button onClick={Onsubmit} className="btn-login mx-auto mt-4">تسجيل الدخول</button>
      </Col>
     
    </Row>
    <ToastContainer />
  </Container>
  )
}
