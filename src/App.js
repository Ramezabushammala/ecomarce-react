import Home from "./Pages/Home/HomePage";
import ShopProducsPage from "./Pages/Products/ShopProducsPage";
import NavBarLogin from "./Components/Utility/NavBarLogin";
import Footer from "./Components/Utility/Footer";
import ProductDetalisPage from "./Pages/Products/ProductDetalisPage";
import LoginPage from "./Pages/Auth/LoginPage";
import CartPage from "./Pages/Cart/CartPage";
import Rigester from "./Pages/Auth/RigesterPage";
import AdminAllOrdersPage from "./Pages/Admin/AdminAllOrdersPage";
import AdminAllProductsPage from "./Pages/Admin/AdminAllProductsPage";
import AllBrandPage from "./Pages/Brand/AllBrandPage";
import AllCategoryPage from "./Pages/Category/AllCategoryPage";
import AdminAddBrandPage from "./Pages/Admin/AdminAddBrandPage";
import AdminAddCategoryPage from "./Pages/Admin/AdminAddCategoryPage";
import AdminSubCategoryPage from "./Pages/Admin/AdminSubCategoryPage";
import AdminAddProductsPage from "./Pages/Admin/AdminAddProductsPage";
import UserAllOrdersPage from "./Pages/User/UserAllOrdersPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserFavoriteProductPage from "./Pages/User/UserFavoriteProductPage";
import UserAllAddressPage from "./Pages/User/UserAllAddressPage";
import UserAddAddressPage from "./Pages/User/UserAddAddressPage";
import UserEditAddressPage from "./Pages/User/UserEditAddressPage";
import UserProfilePage from "./Pages/User/UserProfilePage";
import ChoosePayMethoudPage from "./Pages/Checkout/ChoosePayMethoudPage";
import AdminOrderDetalisPage from "./Pages/Admin/AdminOrderDetalisPage";
import AdminEditProdactPage from "./Pages/Admin/AdminEditProdactPage";
import ForgetPassPage from "./Pages/Auth/ForgetPassPage";
import ProtectRouterHook from "./hookLogic/Auth/ProtectRouterHook";
import ProtecetRouter from "./Components/Utility/ProtecetRouter";

function App() {

 const [isuser,isadmin] = ProtectRouterHook();

  return (
    <div className="font">
      <NavBarLogin />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/products" element={<ShopProducsPage />}></Route>
          <Route path="/products/:id" element={<ProductDetalisPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="/register" element={<Rigester />}></Route>
          <Route path="/allbrand" element={<AllBrandPage />}></Route>
          <Route path="/allcategory" element={<AllCategoryPage />}></Route>
          <Route path="/order/paymethoud" element={<ChoosePayMethoudPage />}></Route>
          <Route  path="/user/forgetPass" element={<ForgetPassPage/>}></Route>
          
          <Route element={<ProtecetRouter auth={isadmin}/>}>
          <Route path="/admin/EditProdact/:id" element={<AdminEditProdactPage/>}></Route>
          <Route path="/admin/allorders"element={<AdminAllOrdersPage />}></Route>
          <Route path="/admin/allproducts"element={<AdminAllProductsPage />}></Route>
          <Route path="/admin/addbrand" element={<AdminAddBrandPage />}></Route>
          <Route path="/admin/addcategory" element={<AdminAddCategoryPage />}></Route>
          <Route path="/admin/addsubcategory"element={<AdminSubCategoryPage />}></Route>
          <Route path="/admin/addproducts" element={<AdminAddProductsPage />}></Route>
          <Route path="/admin/orders/23"element={<AdminOrderDetalisPage />}></Route>

          </Route>
          <Route element={<ProtecetRouter auth={isuser}/>}>
          <Route path="/user/allOrders" element={<UserAllOrdersPage />}></Route>
          <Route path="/user/favorite" element={<UserFavoriteProductPage />}></Route>
          <Route path="/user/address" element={<UserAllAddressPage />}></Route>
          <Route path="/user/add-address"element={<UserAddAddressPage />}></Route>
          <Route path="/user/edit-address" element={<UserEditAddressPage />}></Route>
          <Route path="user/user-profile" element={<UserProfilePage />}></Route> 
          </Route>
        </Routes>

        
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
