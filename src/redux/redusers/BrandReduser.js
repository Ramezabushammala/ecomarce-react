import { GET_ALL_BRAND,GET_ONE_BREAND, GET_ERROR ,CREATE_BRAND } from "../types"

 const initilState ={
    brand:[],
    onebrand:[],
    loading:true
 }

export const BrandReduser = (state= initilState,action)=>{
  
    // eslint-disable-next-line default-case
    switch(action.type){
        case GET_ALL_BRAND:
            return{
              ...state,
              brand : action.payload,
              loading:false,
            }
            case GET_ONE_BREAND:
              return{
                onebrand: action.payload,
                loading:false,
              } 
            case GET_ERROR :
                return {
                  loading :true ,
                  brand:action.payload,
                }
                case CREATE_BRAND:
                    return{
                        brand : action.payload,
                        loading:false, 
                    }
                default : return state
    }
    
 }