import React from "react";
import { Container } from "react-bootstrap";
import CategoryContainer from "../../Components/Category/CategoryContainer";
import PaginationCompontent from "../../Components/Utility/Pagination";
import AllCatgPageHook from "../../hookLogic/Category/AllCatgPageHook";

const AllCategoryPage = () => {

  const [load,category ,Pagecount ,getPage] =AllCatgPageHook();
    console.log(category)
  return (
    <Container style={{ minHeight: "670px" }}>
      <CategoryContainer data={category.data} load={load}/>
     {
      Pagecount>1?(<PaginationCompontent pagecount={Pagecount} onPress={getPage}/>):null
     }
    </Container>
  );
};

export default AllCategoryPage;
