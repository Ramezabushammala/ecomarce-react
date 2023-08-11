import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminEditProdacts from '../../Components/Admin/AdminEditProdacts'
import AdminSideBar from '../../Components/Admin/AdminSideBar'

function AdminEditProdactPage() {
  return (
    <Container>
    <Row className="py-3">
      <Col sm="5" xs="3" md="2">
        <AdminSideBar />
      </Col>
      <Col sm="7" xs="9" md="10">
        <AdminEditProdacts/>
      </Col>
    </Row>
  </Container>
  )
}

export default AdminEditProdactPage
