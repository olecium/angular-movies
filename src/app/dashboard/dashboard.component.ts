import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MoviesService } from './../movies.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  movies: Movie[] = [];

  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(): void {
    this.moviesService.getMovies()
      .subscribe(movies => this.movies = movies.results.slice(1, 6));
  }

}
