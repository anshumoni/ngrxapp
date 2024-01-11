import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn:'root'
})

export class HttpService{
    private baseurl = "https://jsonplaceholder.typicode.com/";
    constructor(private http:HttpClient){}

    getRepos(url:string):Observable<any>{
        //const data ={param,Headers:this.getHeader()}
         return this.http
         .get(this.baseurl+url,{responseType:'json'}).pipe(catchError(this.errorHandler.bind(this)));
    }

    private errorHandler(response:any){
        const error = response.error;
        const keys = Object.keys(error);
        const key = keys[0];
        let message = error[key];
        if(response.status==='401'){
            //redirect to login page
        }
        if(error[key] instanceof Array){
            message = error[key][0];
        }
        if(key==='isTrusted'){
            //show snapbar
        }else{
            message = key +':'+message;
        }

        return throwError({message:message,error:error})
    }

}