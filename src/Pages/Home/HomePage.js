import React from "react";
import Slider from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import DiscountSection from "../../Components/Home/DiscountSection";
import BrandFeatured from "../../Components/Brand/BrandFeatured";
import ViewHomeProdHook from "../../hookLogic/Prodact/ViewHomeProdHook";

const Home = () => {
 
 const [item]= ViewHomeProdHook();
 
 return (
    <div style={{ minHeight: "670px" }}>
      <Slider />
      <HomeCategory />
      <CardProductsContainer
        title="الاكثر مبيعا"
        btntitle="المزيد"
        pathText="/products"
        prodacts={item}
      />
      <DiscountSection />
      <CardProductsContainer
        title="احدث الازياء"
        btntitle="المزيد"
        pathText="/products"
      />
      <BrandFeatured
        title="اقوي الماركات"
        btntitle="المزيد"
        pathText="/allbrands"
      />
    </div>
  );
};

export default Home;
