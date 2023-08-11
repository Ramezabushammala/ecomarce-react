import { All_LIST_FAV, DELETE_LIST_FAV, WISH_LIST_FAV } from "../types";


const initialstate ={
    wishlist:[],
    deletefav:[],
    userfav:[],
    loading:true
};
 const WishListReduser =(state=initialstate ,action)=>{
    // eslint-disable-next-line default-case
    switch(action.type){
       case WISH_LIST_FAV:
           return{
               ...state,
               wishlist:action.payload,
               loading:false,
               }
               case DELETE_LIST_FAV:
                return{
                    ...state,
                    deletefav:action.payload,
                    loading:false,
                    }
                    case All_LIST_FAV:
                return{
                    ...state,
                    userfav:action.payload,
                    loading:false,
                    }
                  
               default:
                return state;
            }
        }

  export default WishListReduser ;