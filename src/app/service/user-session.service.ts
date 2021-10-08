import { Injectable } from '@angular/core';

@Injectable()
export class UserSessionService {

  public userInfo: any;
  constructor() { }

  GetCurrentUser(): any
  {
    const cUser = localStorage.getItem('currentUser') as any;
    if (cUser != null) {
      this.userInfo = JSON.parse(cUser);
      return this.userInfo;
    } else {
      alert('local storage current user does not exist');
    }
  }
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
