import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { HttpClient } from "@angular/common/http"
import { environment } from "src/environments/environment";
import { CookieService } from "ngx-cookie-service";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from "@angular/router";

const ROOT_PATH = environment.requestRoot;

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient,
        private cookieService: CookieService,
        private router: Router){}

    storeToken(token:string){
    
        this.cookieService.set('token',token);
        localStorage.setItem('token',token);
    }

    setUsername(username: string){
        localStorage.setItem('username',username)
    }

    removeToken(){
        this.cookieService.delete('token');
        localStorage.removeItem('token');
    }

    getToken(){
        return this.cookieService.get('token');
    }

    isLoggedIn(){
        return !!this.getToken();
    }


    doLogout(){
        this.removeToken();
        this.router.navigate(['login']);
    }

}