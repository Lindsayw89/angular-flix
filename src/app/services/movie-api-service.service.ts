import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  url="https://api.themoviedb.org/3/";
//TODO get api key
  constructor(private httpClient : HttpClient) { }

  async get(path) {
    return await this.httpClient.get<any>(this.url + path).toPromise();
  }

 
}
