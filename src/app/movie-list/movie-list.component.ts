import { AppTitleService } from './../app-title.service';
import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './../dashboard/dashboard.component.html',
  styleUrls: ['./../dashboard/dashboard.component.less']
})
export class MovieListComponent implements OnInit {

  public movies: Movie[];
  title: String;

  constructor(
    private moviesService: MoviesService,
    private appTitleService: AppTitleService
  ) {
    moviesService.getMovies().subscribe(x => this.movies = x);
  }

  ngOnInit() {
    this.appTitleService.setTitle('All movies');
  }

}
