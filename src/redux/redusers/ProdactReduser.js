import { CREATE_PRODACT,GET_DELET_PRODACTID,GET_LIKE_PRODACTID, GET_ALL_PRODACT, GET_ALL_PRODACTID, GET_ERROR, UPDATE_PRODACT } from "../types";

const initilState = {
    prodacts: [],
    allprodacts:[],
    likeProdact:[],
    loading: true,
    prodactID: [],
    prodactPage: [],
    deletprodact:[],
    ubdateprodact:[],
  };
  
  const prodactReduser = (state = initilState, action) => {
      switch (action.type) {
          case GET_ALL_PRODACT:
              return {
                  ...state,
                  allprodacts: action.payload,
                  loading: false,
                }; 
                case GET_ALL_PRODACTID:
              return {
                  ...state,
                  prodactID: action.payload,
                  loading: false,
                }; 
                case GET_LIKE_PRODACTID:
                  return{
                    ...state,
                   likeProdact: action.payload,
                   loading:false,
                  }
                  // case  GET_Page_PRODACT:
                  // return{
                  //  ...state,
                  //  prodactPage: action.payload,
                  //  loading:false,
                  // }
                  case  GET_DELET_PRODACTID:
                  return{
                   deletprodact: action.payload,
                   loading:false,
                  }
              case GET_ERROR :
              return {
                loading :true ,
                prodacts:action.payload,
              } 
              case CREATE_PRODACT :
                return {
                   prodacts :action.payload,
                   loading:false
                }
                case UPDATE_PRODACT:
                  return {
                  ...state,
                  ubdateprodact: action.payload,
                  loading: false,
                };

                
          default:
          return state ;
      }
  };
  export default prodactReduser;
  