import React from "react";
import { Row } from "react-bootstrap";

import AdminAllProducsCard from "./AdminAllProducsCard";
const AdminAllProducts = ({pro}) => {
 
  return (
    <div>
      <div className="admin-content-text">اداره جميع المنتجات</div>
      <Row className="justify-content-center ">
        {
          pro.data?(pro.data.map((prodact,index)=><AdminAllProducsCard key={index} pro={prodact}/>)):null
        }
       
      </Row>
    </div>
  );
};

export default AdminAllProducts;
