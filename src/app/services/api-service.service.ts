import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {


  url="https://ce-authenticated-backend.herokuapp.com/";
  constructor(private httpClient : HttpClient) { }
  
  async get(path) {
    return await this.httpClient.get<any>(this.url + path).toPromise();
  }

  async post(path:string, data){
    return await this.httpClient.post(this.url + path, data).toPromise();
  }

}
