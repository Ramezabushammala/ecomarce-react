import React from "react";
import { Container, Row,Spinner } from "react-bootstrap";
import BrandCard from "./BrandCard";
const BrandContainer = ({brand ,loading}) => {

  return (
    <div className="my-3">
      <Container>
        <div className="admin-content-text ">كل الماركات</div>
        <Row className="my-1 justify-content-between">
        {
          loading===false ?(
            brand.data?(
              brand.data.map((item,index)=>(
                <BrandCard key={index} img={item.image} />  
              ))
            ):<h1>NO BRANDS</h1>
          ):<Spinner animation="border" variant="primary"/>
        }   
        </Row>
      </Container>
    </div>
  );
};

export default BrandContainer;
