import React, { useEffect, useState } from "react";
import { Col, Spinner } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/actions/categoryAction";
const CategorysHeader = () => {
//  const [loading,setLoading]=useState(true);
  const dispatch =useDispatch();
  const {category}=useSelector((state)=>state.AllCategory)
  const {loading}=useSelector((state)=>state.AllCategory)
   useEffect(()=>{
     dispatch(getAllCategory())
 },[])
 
  return (
    <div className="cat-header">
      <Container>
        <Row>
          <Col className="d-flex justify-content-start py-2 flex-wrap">
            <div className="cat-text-header ">الكل</div>
            {
              // loading===false?(
              //   category.data?(
              //     category.data.map((itemm,index)=><div key={index} className="cat-text-header">{itemm.name}</div>)  
              //     ):null
              // ):<Spinner animation="grow" variant="primary" />     
            }
          </Col>
        </Row>
      </Container>
    </div>
  );
};



export default CategorysHeader;
