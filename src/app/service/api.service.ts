import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class ApiService {
  results: object[];
  data: any;
  // readonly apiRoot = "http://webapi.acopena.net/api/pbao/";

  readonly apiRoot = 'http://localhost:7027/api/fco/';

  loading: boolean;

  constructor(private http: HttpClient) {
    this.results = [];
    this.loading = false;
  }

  gets(url: string): Observable<any[]> {
    return this.http.get<any[]>(this.apiRoot + url);
  }

  get(url: string): Observable<any> {
    return this.http.get<any>(this.apiRoot + url);
  }

  private handleError(err: HttpErrorResponse) {
    return throwError(err.message);
  }

  post(url: string, body: string): Observable<any> {
    const options = {
      headers: new HttpHeaders().set(
        'Content-Type',
        'application/x-www-form-urlencoded'
      )
    };

    return this.http.post(this.apiRoot + url, body.toString(), options);
  }

  getOld(url: string): Observable<any> {
    this.http.get<any>(url).subscribe(
      result => {
        this.data = result;
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occurred");
        } else {
          console.log("Server-side Error occurred");
        }
      }
    );

    return this.data;
  }

  getUserSession(): any {
    let userInfo: any;
    userInfo  = localStorage.getItem('currentUser');
    if (userInfo == null) {
      alert('local storage current user does not exist');
    }
    return  userInfo = JSON.parse(userInfo);
  }

  // getMessage() {
  //   // tslint:disable-next-line:quotemark
  //   return "this is message test";
  // }
}

interface UserModel {
  userId: number;
  userName: string;
  firstName: string;
  lastName: string;
  clubId: number;
  clubName: string;
  userRoleList: UserRoleModel[];
}
interface UserRoleModel {
  userTypeId: number;
  userTypeName: string;
}
