import {CREATE_CATEGORY, GET_ALL_CATEGORY ,GET_ERROR, GET_ONE_CATEGORY} from "../types";

const initilState = {
  category: [],
  onecategory: [],
  loading: true,
};

const categoryReduser = (state = initilState, action) => {
    switch (action.type) {
        case GET_ALL_CATEGORY:
            return {
                ...state,
                category: action.payload,
                loading: false,
              }; 
              case GET_ONE_CATEGORY:
                return {
                    onecategory: action.payload,
                    loading: false,
                  }; 
          case GET_ERROR :
            return {
              loading :true ,
              category:action.payload,
            } 
            case CREATE_CATEGORY :
              return {
                 category :action.payload,
                 loading:false
              }
        default:
        return state ;
    }
};
export default categoryReduser;
