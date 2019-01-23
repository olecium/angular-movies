import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.less']
})
export class MovieListComponent implements OnInit {

  public movies: Movie;

  constructor(private moviesService: MoviesService) {
    moviesService.getMovies().subscribe(x => this.movies = x.results);
  }

  ngOnInit() {
  }

}
