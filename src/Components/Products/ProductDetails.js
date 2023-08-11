import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ViewDateilsHook from "../../hookLogic/Prodact/ViewDateilsHook";
import ProductGallery from "./ProductGallery";
import ProductsText from "./ProductsText";
const ProductDetails = () => {
  const [images,item,cat,brandd,likepro] =ViewDateilsHook();

  return (
    <Container>
      <Row className="py-3">
        <Col lg="4"  className="">
          <ProductGallery images={images}/>
        </Col>
        <Col lg="8" className="">
          <ProductsText item={item} cat={cat} brand={brandd}/>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
