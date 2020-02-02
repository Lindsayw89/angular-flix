import { Component,OnInit } from '@angular/core';
import {MovieServiceService} from './services/movie-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private movieService :MovieServiceService){}
  ngOnInit(): void {
 this.searchResults=this.movieService.getSearchResults();
 this.myMovieList=this.movieService.getMovieList();
 this.movieService.loadMovieList();
  }
  searchResults = [];
  myMovieList =  [];
  title = 'Angular Flix';
}
