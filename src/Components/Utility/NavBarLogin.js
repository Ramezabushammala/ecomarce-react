
import React, { useEffect } from "react";
import { Navbar, Nav, Container, FormControl ,NavDropdown } from "react-bootstrap";
import logo from "../../images/logo.png";
import login from "../../images/login.png";
import cart from "../../images/cart.png";
import SearchWordHook from "../../hookLogic/Search/SearchWordHook";
import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getLogeedUser } from "../../redux/actions/AutunactionAction";

const NavBarLogin = () => {
   const [searchword,setSearhword,onSearchword] =SearchWordHook();
   let word ='' ;
   if(localStorage.getItem("searchword") !=null)
       word =localStorage.getItem("searchword");

    const [user,setUser]=useState('');
    // const dispatch =useDispatch();
    // const {currentUser}=useSelector((state)=>state.AutuncationReduser);
   useEffect(()=>{
    // dispatch(getLogeedUser());
    if(localStorage.getItem("user") !=null){
      setUser(JSON.parse(localStorage.getItem("user"))) ;
     }
   },[])
  //  if(currentUser){
  //    console.log(currentUser);
  //  }
      const logout =()=>{
      localStorage.removeItem("user")
       localStorage.removeItem("token")
       setUser('');
      }
      
  return (
    <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand>
          <a href="/">
            <img src={logo} className="logo" alt="sfvs" />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <FormControl
            value={word}
            type="search"
            placeholder="ابحث..."
            className="me-2 w-100 text-center"
            aria-label="Search"
            onChange={onSearchword}
          />
          <Nav className="me-auto">
         {
          // return ramez edit class css any dropdown menue 
          // to see class css from reactcompnent open combonent in bootstrap5
          user?( <NavDropdown title={user.name} id="basic-nav-dropdown">

            {
              user.role==="admin"?(<NavDropdown.Item  href="/admin/allorders"> لوحة التحكم</NavDropdown.Item>):
              (<NavDropdown.Item  href="user/user-profile">الصفحة الشحصية</NavDropdown.Item>)
            }
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={logout} href="/"> تسجيل خروج</NavDropdown.Item>
        </NavDropdown>) :

        (<Nav.Link
            href="/login"
            className="nav-text d-flex mt-3 justify-content-center">
            <img src={login} className="login-img" alt="sfvs" />
            <p style={{ color: "white" }}>دخول</p>
          </Nav.Link>)
         }
            
            <Nav.Link
              href="/cart"
              className="nav-text d-flex mt-3 justify-content-center"
              style={{ color: "white" }}>
              <img src={cart} className="login-img" alt="sfvs" />
              <p style={{ color: "white" }}>العربه</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarLogin;
