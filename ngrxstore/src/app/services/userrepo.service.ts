import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';
import { Observable, combineLatest } from 'rxjs';
import { ApiService } from 'src/app/services/api.services';
import { UserAddAction, UserDeleteAction, UserUpdateAction, UserlistAction, UserlistrequestAction } from 'src/app/store/actions/user.actions';
import { RootReducerState, getuserlist,getLoading,getloaded } from 'src/app/store/reducer';
import { User } from "../model/user";

@Injectable({
    providedIn:'root'
})
export class UserRepoService{
    constructor(private apiservice:ApiService,private store:Store<RootReducerState>){}

    getUser(force=false):[Observable<boolean>,Observable<User[]>]{
        
      const loading$= this.store.select(getLoading);
      const loaded$ = this.store.select(getloaded);
      const getuserlist$ = this.store.select(getuserlist);
       
      combineLatest([loading$,loaded$]).subscribe((data)=>{       
          if(!data[0] && !data[1] || force){
          this.store.dispatch(new UserlistrequestAction())
          this.apiservice.getUser('users').subscribe(res=>{ 
          this.store.dispatch(new UserlistAction({data:res}))
          })
        
        }
      })
      return [loading$,getuserlist$];
    }

    deleteUser(id:number){
        this.store.dispatch(new UserDeleteAction({id}))
    }

    updateUser(data:User){
        this.store.dispatch(new UserUpdateAction({data}));
    }
    
    adduser(data:User){
        this.store.dispatch(new UserAddAction({data}))
    }

}