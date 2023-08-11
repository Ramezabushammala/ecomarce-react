import {combineReducers} from "redux"
import { BrandReduser } from "./BrandReduser"
import categoryReduser from "./categoryReduser"
import categorysubReduser from "./createsubcategoryreduser"
import prodactReduser from "./ProdactReduser"
import { AutuncationReduser } from "./AutuncationReduser"
import WishListReduser from "./WishListReduser"


  export default combineReducers({
       AllCategory:categoryReduser,
       AllBrand:BrandReduser,
       SubCategory:categorysubReduser,
       AllProdact:prodactReduser, 
       AutuncationReduser:AutuncationReduser, 
       WishListReduser:WishListReduser   
  })
