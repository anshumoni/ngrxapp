import { User } from "../model/user";
import { Injectable } from "@angular/core";
import { Observable, map, throwError } from 'rxjs';
import { HttpService } from "./http.services";


@Injectable({
    providedIn:"root"
})

export class ApiService{
    constructor(private http:HttpService){}

    getUser(url:string):Observable<User[]>{
       return this.http.getRepos(url)
        .pipe(map(data=>data as User[]))

    }
}