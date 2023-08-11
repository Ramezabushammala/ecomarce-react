import React from "react";
import { Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import AdminAllProducts from "../../Components/Admin/AdminAllProducts";
import PaginationCompontent  from '../../Components/Utility/Pagination'
import ViewProdactAdminhook from "../../hookLogic/Admin/ViewProdactAdminhook";

const AdminAllProductsPage = () => {
    
 const [item,Pagecount,getpage]= ViewProdactAdminhook();
  return (
    <Container>
      <Row className="py-3">
        <Col sm="3" xs="2" md="2">
          <AdminSideBar />
        </Col>
        <Col sm="9" xs="10" md="10">
          <AdminAllProducts pro={item}/>
           {
          Pagecount>1?(<PaginationCompontent pagecount={Pagecount} onPress={getpage} />):null
          } 
        </Col>
      </Row>
    </Container>
  );
};

export default AdminAllProductsPage;
