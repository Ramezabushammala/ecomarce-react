import React from "react";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import ProductCard from "./ProductCard";
import SubTitle from "../Utility/SubTitle.js";
import CardProConteHook from "../../hookLogic/Prodact/CardProConteHook";

const CardProductsContainer = ({ title, btntitle,prodacts}) => {  
 const [favprod]=CardProConteHook();
  return (
    <Container>
      {
        prodacts?(<SubTitle title={title} btntitle={btntitle} pathText="/products" />):null
      }
      <Row className="justify-content-between ">
        
        {
       
         prodacts?(
          prodacts.map((item,index)=><ProductCard key={index} item={item} favprod={favprod} />)
          ):null
        }
      
      </Row>
    </Container>
  );
};

export default CardProductsContainer;
