import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
// import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import {
  HttpHeaders,
  HttpErrorResponse,
  HttpParams,
  HttpParameterCodec,
} from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
import { ApiService } from '../../service/api.service';
import { StorageService } from '../../service/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public userName = '';
  public passWord = '';

  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private api: ApiService,
    private storage: StorageService
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('currentUser') != null) {
      this.router.navigate(['/dashboard']);
    }
  }

  onSubmit(): void {
    const url =
      'FcoUser/GetFCO_UserAccount?email=' +
      this.userName +
      '&password=' +
      this.passWord;

    this.api.get(url).subscribe(
      (result) => {
        if (result.userId > 0) {
          localStorage.setItem('currentUser', JSON.stringify(result));
          location.reload();
          // this.api
          //   .get('division/GetDivisionByType?typeId=2')
          //   .subscribe((data) => {
          //     this.storage.store('DivisionList', data);
          //     location.reload();
          //   });
        } else {
          alert('Invalid Email or Password');
        }
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Client-side error occured.');
        } else {
          console.log('Server-side error occured.');
        }
      }
    );
  }
}
