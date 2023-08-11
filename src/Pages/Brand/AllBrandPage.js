import React from "react";
import { Container } from "react-bootstrap";
import BrandContainer from "../../Components/Brand/BrandContainer";
import PaginationCompontent from "../../Components/Utility/Pagination";
import AllBrandPageHook from "../../hookLogic/Brand/AllBrandPageHook";
const AllBrandPage = () => {
 const [brand ,loading ,getPage,pagecount]=AllBrandPageHook();
  return (
    <Container style={{ minHeight: "680px" }}>
      <BrandContainer brand={brand} loading={loading} />
      {
      pagecount>1 ?(<PaginationCompontent pagecount={pagecount} onPress={getPage}/>):null
     }
    </Container>
  );
};

export default AllBrandPage;
