import React from "react";
import { Row, Col } from "react-bootstrap";
import SidefilterSearchHook from "../../hookLogic/Search/SidefilterSearchHook";

const SideFilter = () => {
 const [category,brand,onCheakedcategory,onCheakedbrand,pricefrom,priceto]=SidefilterSearchHook();
 let localfrom=localStorage.getItem("pricefrom");
 let localto=localStorage.getItem("priceto");
  return (
    <div className="mt-3">
      <Row>
        <div className="d-flex flex-column mt-2">
          <div className="filter-title">الفئة</div>
          <div className="d-flex mt-3">
            <input onChange={onCheakedcategory} type="checkbox" value="0" />
            <div className="filter-sub me-2 ">الكل</div>
          </div>
             
            {
              category?(category.map((item,index)=>{
                return(
                  <div key={index} className="d-flex mt-3">
                     <input onChange={onCheakedcategory} type="checkbox" value={item._id} />
                     <div className="filter-sub me-2 ">{item.name}</div>
                 </div>
                )
              })):<h6>no category</h6>
            }

        </div>

        <div className="d-flex flex-column mt-2">
          <div className="filter-title mt-3">الماركة</div>
          <div className="d-flex mt-3">
            <input onChange={onCheakedbrand} type="checkbox" value="0" />
            <div  className="filter-sub me-2 ">الكل</div>
          </div>
          {
              brand?(brand.map((item,index)=>{
                return(
                  <div key={index} className="d-flex mt-3">
                     <input onChange={onCheakedbrand} type="checkbox" value={item._id} />
                     <div className="filter-sub me-2 ">{item.name}</div>
                 </div>
                )
              })):<h6>no brand</h6>
            }
        </div>

        <div className="filter-title my-3">السعر</div>
        <div className="d-flex">
          <p className="filter-sub my-2">من:</p>
          <input
           value={localfrom}
            onChange={pricefrom}
            className="m-2 text-center"
            type="number"
            style={{ width: "50px", height: "25px" }}
          />
        </div>
        <div className="d-flex">
          <p className="filter-sub my-2">الي:</p>
          <input
            value={localto}
            onChange={priceto}
            className="m-2 text-center"
            type="number"
            style={{ width: "50px", height: "25px" }}
          />
        </div>
      </Row>
    </div>
  );
};

export default SideFilter;
