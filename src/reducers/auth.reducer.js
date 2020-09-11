import { authConstant } from "../actions/Constansts";

const initState={
    firstName:'',
    lastName:'',
    email:'',
    roll:'',
    Branch:'',
    authenticating:false,
    authenticated:false,
    error:null
}
export default (state=initState,action)=>{
    switch(action.type){
        case `${authConstant.USER_LOGIN}_REQUEST`:
        state={
            ...state,
            authenticating:true
        }
        break;
        case `${authConstant.USER_LOGIN}_SUCCESS`:
            state={
                ...state,
                ...action.payload.user,
                authenticated:true,
                authenticating:true
            }
            break;
            case `${authConstant.USER_LOGIN}_FAILURE`:
                state={
                    ...state,
                    authenticated:false,
                    authenticating:false,
                    error:action.payload.error
                }
                break;
            case `${authConstant.USER_LOGOUT}_REQUEST`:
             break;
            case`${authConstant.USER_LOGOUT}_SUCCESS`:
            state={
                ...initState
            }
            break;
            case `${authConstant.USER_LOGOUT}_FALIURE`:
              state={
                  ...state,
                  error:action.payload.error
              }
              break;
           
            
    }
    return state;
}