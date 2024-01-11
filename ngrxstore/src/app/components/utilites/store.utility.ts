import { User } from "src/app/model/user"

export class StoreUtility{
    static normalize(entities:Entity[]){
       return entities.reduce((prev,current)=>{
           return {...prev,...{[current.id]:current}}
       },{})
    }

    static unnormalize(entities:{id:any}){
        if(!entities){
            return []
        }else{
            return Object.keys(entities).map(ele=>entities[ele])

        }
     }
     static removeduplicate(ids:number[]){
         return ids.filter((ele,index,self)=>index===self.indexOf(ele))
     }

     static deletekey(entities:{id:{}},id1:number){
          const newobj ={...entities};
          delete newobj[id];
          return newobj;
     }
}

export interface Entity{
    id:any
}