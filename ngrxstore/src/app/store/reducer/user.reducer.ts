import { User } from "src/app/model/user";
import { Action } from "../actions";
import { USER_ADD, USER_DELETE, USER_LIST_REQUEST, USER_LIST_SUCCESS, USER_UPDATE } from "../actions/user.actions";
import { RootReducerState } from ".";

export  interface UserReducerState{
     loading:boolean,
     loaded:boolean,
     users:User[]
}

const intialstate:UserReducerState={
    loading:false,
    loaded:false,
    users:[]
}

export function UserReducer(state=intialstate,action:Action){
    switch(action.type){
        case USER_LIST_REQUEST:
            return {...state,loading:true}
        case USER_LIST_SUCCESS:
            const updateuser = action.payload.data;
            return {...state,loading:false,loaded:true,users:updateuser} 
        case USER_DELETE:
            const user = state.users.filter(data=>data.id!==action.payload.id);console.log(user)
            return {...state,...{users:user}} 
    case USER_UPDATE:
                const userdata = state.users.filter(data=>data.id!==action.payload.data.id);
                const updateuse = state.users.concat(action.payload.data)
                return {...state,...{users:updateuse}} 
    case USER_ADD:
                const addeduseruser = state.users.concat(action.payload.data)
                return {...state,...{users:addeduseruser}} 
                    
        default:return {...state}       
    }
}

export const getloading =(state:UserReducerState)=>state.loading;
export const getloaded =(state:UserReducerState)=>state.loaded;
export const getusers=(state:UserReducerState)=>state.users;