import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonHttpService {
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http : HttpClient) { }


  httpGet(url:string)
  {
   return this.http.get(`${baseUrl}/${url}`, {headers :this.httpHeaders})
  }
  
  httpPost( url :string , data : any)
  {
    
    return this.http.post(`${baseUrl}/${url}`,data)
  }

  httpUpdate( url :string , data :any , id : string)
  {
    return this.http.put(`${baseUrl}/${url}/${id}`,data)
  }

  httpDelete(url : string , id : string)
  {
    return this.http.delete(`${baseUrl}/${url}/${id}`, {headers:this.httpHeaders})
  }
}
