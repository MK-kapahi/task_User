import { Injectable } from '@angular/core';
import { CommonHttpService } from './common-http.service';
import { Api } from 'src/app/common/constant';

@Injectable({
  providedIn: 'root'
})
export class CurdOperationService {

  constructor( private client : CommonHttpService) { }

  getEmployee()
  {
   return this.client.httpGet(Api.GET)
  }

  addEmployee(data:any)
  {
    return this.client.httpPost(Api.ADD,data)
  }
}
