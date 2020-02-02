import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  url="https://api.themoviedb.org/3/";
apikey="&api_key=f605912d7a59b1cfb1e62bb44af53eb0";
  constructor(private httpClient : HttpClient) { }

  async get(path) {
    return await this.httpClient.get<any>(this.url + path + this.apikey).toPromise();
  }

 
}
