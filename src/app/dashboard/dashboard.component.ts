import { AppTitleService } from './../app-title.service';
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
  title: String;

  constructor(
    private moviesService: MoviesService,
    private appTitleService: AppTitleService
  ) {
  }

  ngOnInit() {
    this.getMovies();
    this.appTitleService.setTitle('Movies dashboard');
  }

  getMovies(): void {
    this.moviesService.getMovies()
      .subscribe(movies => this.movies = movies.slice(1, 6));
  }

}
