import { AppTitleService } from './../app-title.service';
import { CharactersService } from './../characters.service';
import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Movie } from '../movie';
import { Character } from '../character';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.less']
})
export class MovieComponent implements OnInit {

  public movie: Movie;
  title: String;
  public characters: Character[];

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService,
    private location: Location,
    private charactersService: CharactersService,
    private appTitleService: AppTitleService
  ) { }

  ngOnInit(): void {
    this.getMovie();
    this.appTitleService.setTitle('');
  }

  getMovie(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.moviesService.getMovie(id)
      .subscribe(movie => {this.movie = movie;
      this.getCharacters(); });
  }

  getCharacters(): void {
    if (!this.movie) { return; }
    this.charactersService.getMovieCharacters(this.movie.characters)
      .subscribe(characters => this.characters = characters);
  }
}
