import {CREATE_SUBCATEGORY,GETALL_SUBCATEGORY,GET_ERROR} from "../types";

const initilState = {
  subcategory: [],
  loading: true,
};

const categorysubReduser = (state = initilState, action) => {
    switch (action.type) {
        case CREATE_SUBCATEGORY:
            return {
                ...state,
                subcategory: action.payload,
                loading: false,
              }; 
          case GET_ERROR :
            return {
              loading :true ,
              subcategory:action.payload,
            }
            case GETALL_SUBCATEGORY:
           
            return {
                subcategory: action.payload,
                loading: false,
              }; 
        default:
        return state ;
    }
};
export default categorysubReduser;