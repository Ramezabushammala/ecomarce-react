import React from "react";
import { Container } from "react-bootstrap";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import ProductDetails from "../../Components/Products/ProductDetails";
import CategorysHeader from "../../Components/Category/CategorysHeader";
import RateContainer from "../../Components/Rate/RateContainer";
import ViewDateilsHook from "../../hookLogic/Prodact/ViewDateilsHook";

const ProductDetalisPage = () => {
   
  const [images,item,cat,brandd,likepro] =ViewDateilsHook();
  var itemm;
  if(item)
  itemm=item;
  return (
    <div>
      <CategorysHeader />
      <Container>
        <ProductDetails  />
        <RateContainer item={itemm} />
        <CardProductsContainer prodacts={likepro}  title="منتجات قد تعجبك" btntitle="" />
      </Container>
    </div>
  );
};

export default ProductDetalisPage;
