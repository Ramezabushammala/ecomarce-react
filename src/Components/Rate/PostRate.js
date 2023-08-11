import React from "react";
import { Row, Col } from "react-bootstrap";
import rate from "../../images/rate.png";
import ReactStars from "react-rating-stars-component";
import {__esModule } from "react-rating-stars-component/dist/hooks/useConfig";
import RatePostHook from "../../hookLogic/rate/RatePostHook";

const PostRate = () => {

  const [OnChangeComment,OnChangeRate,ratevalue,ratetext,user,Onsubmit] =RatePostHook();
   var name=""
  if(user)
  name=user.name
  const setting = {
    size: 20,
    count: 5,
    color: "#979797",
    activeColor: "#ffc107",
    value: 0.5,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: (newValue) => {
      OnChangeRate(newValue);
    },
  };

  return (
    <div>
      <Row className="mt-3 ">
        <Col sm="12" className="me-5  d-flex">
          <div className="rate-name  d-inline ms-3 mt-1 ">{name}</div>
          <ReactStars {...setting} />
        </Col>
      </Row>
      <Row className="border-bottom mx-2">
        <Col className="d-felx me-4 pb-2">
          <textarea
            value={ratetext}
            onChange={OnChangeComment}
            className="input-form-area p-2 mt-3"
            rows="2"
            cols="20"
            placeholder="اكتب تعليقك...."
          />
          <div className=" d-flex justify-content-end al">
            <div onClick={Onsubmit} className="product-cart-add px-3  py-2 text-center d-inline">اضف تعليق</div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PostRate;
