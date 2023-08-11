import { FORGET_PASSWORD, GET_CURRENT_USER, LOGIN_USER, SIGN_UP_SUCCESS } from "../types"


const initialstate ={
    datasignUp:[],
    datalogin:[],
    dataforget:[],
    currentUser:[],
    loading:true
};

export const AutuncationReduser =(state=initialstate ,action)=>{
 // eslint-disable-next-line default-case
 switch(action.type){
    case SIGN_UP_SUCCESS:
        return{
            ...state,
            datasignUp:action.payload,
            loading:false,
            }
    case LOGIN_USER:
        return{
            ...state,
            datalogin:action.payload,
            loading:false,
            }
            case GET_CURRENT_USER:
        return{
            ...state,
            currentUser:action.payload,
            loading:false,
            }
            case FORGET_PASSWORD:
                return{
                    ...state,
                    dataforget:action.payload,
                    loading:false,
                    }
            default:
              return state ;
 }
}
