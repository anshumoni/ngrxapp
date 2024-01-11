import { User } from "src/app/model/user";

export const USER_LIST_REQUEST ="user_list_request";
export const USER_LIST_SUCCESS ="user_list_success";
export const USER_LIST_FAILURE ="user_list_failure";
export const USER_DELETE ="user_delete";
export const USER_UPDATE ="user_update";
export const USER_ADD ="user_add";





export class UserlistrequestAction{
    readonly type = USER_LIST_REQUEST;
}

export class UserlistAction{
    readonly type = USER_LIST_SUCCESS;
    constructor(public payload?:{data:User[]}){}
}
export class UserDeleteAction{
    readonly type = USER_DELETE;
    constructor(public payload?:{id:number}){}
}

export class UserUpdateAction{
    readonly type = USER_UPDATE;
    constructor(public payload?:{data:User}){}
}

export class UserAddAction{
    readonly type = USER_ADD;
    constructor(public payload?:{data:User}){}
}