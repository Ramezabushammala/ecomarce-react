import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import BrandCard from "./BrandCard";
import SubTitle from "../Utility/SubTitle.js";
import BrandFeatHook from "../../hookLogic/Brand/BrandFeatHook";

const BrandFeatured = () => {
  const [brand, load] = BrandFeatHook();
  return (
    <div className="my-3">
      <Container>
        <SubTitle
          title="اشهر الماركات"
          btntitle="المزيد"
          pathText="/allbrand"
        />

        <Row className="my-1 justify-content-between">
          {load === false ? (
            brand.data ? (
              brand.data
                .slice(0, 6)
                .map((item, index) => (
                  <BrandCard key={index} img={item.image} />
                ))
            ) : (
              // name image from api post man from data
              <h1> No Brands</h1>
            )
          ) : (
            <Spinner animation="grow" variant="primary" />
          )}
        </Row>
      </Container>
    </div>
  );
};

export default BrandFeatured;
