import { ActionReducerMap, createSelector } from "@ngrx/store";
import * as fromuser from "./user.reducer";


export interface RootReducerState{
    users:fromuser.UserReducerState
}

export const rootReducer:ActionReducerMap<RootReducerState>={
    users:fromuser.UserReducer
}

export const getuser = (state:RootReducerState)=>state.users;

export const getLoading = createSelector(getuser,fromuser.getloading)
export const getloaded = createSelector(getuser,fromuser.getloaded)
export const getuserlist = createSelector(getuser,fromuser.getusers)


