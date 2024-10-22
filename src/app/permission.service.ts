import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {
  userRole: string = '';
  constructor() { }

    canEditField(): boolean {
      this.userRole = localStorage.getItem('userRole') || '';
      if(this.userRole ==='admin'){
        return true;
      }else{
        return false;
      }
    }
  
}
