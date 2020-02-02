import { Injectable } from '@angular/core';
import {MovieApiServiceService} from '../services/movie-api-service.service';
import {ApiServiceService} from '../services/api-service.service';

 
@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
  searchResults = []
  myMovieList = []


  constructor(private movieApi :MovieApiServiceService, private api: ApiServiceService) { }
getSearchResults(){
  return this.searchResults;
}
getMovieList(){
  return this.myMovieList;
}
async searchForMovies(searchTerm){
 
 let response = await this.movieApi.get(`search/multi?query=${searchTerm}`);
this.searchResults.length = 0;
this.searchResults.push(...response.results);
return this.searchResults;
}
async loadMovieList(){
  let results = await this.api.get(`publicapi/movies`);
this.myMovieList.length = 0;
this.myMovieList.push(...results);
}

async saveToList(movie){
  this.loadMovieList();
  this.api.post("publicapi/movies", movie)
}
}
