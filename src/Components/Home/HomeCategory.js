import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import CategoryCard from "../Category/CategoryCard";
import SubTitle from "../Utility/SubTitle";
import HomeCatgHook from "../../hookLogic/Category/HomeCatgHook";
const HomeCategory = () => {

 const [category,load,colors] =HomeCatgHook();
  return (
    <Container>
      <SubTitle title=" التصنيفات" btntitle="المزيد" pathText="/allcategory" />
      <Row className="my-2 d-flex  justify-content-between">
        {
          load===false ?(
            category.data?(
              category.data.slice(0,6).map((item,index)=>
              <CategoryCard key={index} title={item.name} img={item.image} background={colors[index]} />)
              )
        :<h1> No Category</h1>
          ):<Spinner animation="grow" variant="primary" />
        }
      </Row>
    </Container>
  );
};
export default HomeCategory;
