import React from "react";
import { Container, Row } from "react-bootstrap";
import CategoryCard from "./CategoryCard";
const CategoryContainer = ({data ,load}) => {
  const colors =["#ffd3e8","#f4dba5","#55cfdf","#ff6262","#0034ff","#ffd3e8"]

  return (
    <div className="my-3">
      <Container>
        <div className="admin-content-text ">كل التصنيفات</div>
        <Row className="my-1 justify-content-between">

        {
        load===false ?(data ?
          data.map((item,index)=>(<CategoryCard key={index} title={item.name} img={item.image} background={colors[Math.floor(Math.random()*5)+1]} />)) 
          :<h1>No category</h1>):<h1>loading....</h1>
        }
        </Row>
      </Container>
    </div>
  );
};

export default CategoryContainer;
