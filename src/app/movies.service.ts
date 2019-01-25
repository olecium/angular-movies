import { Movie } from './movie';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private httpClient: HttpClient
  ) {}

  private filmsUrl = 'https://swapi.co/api/films';
  // private filmsUrl = 'api/movies';

  public getMovies(): Observable<Movie[]> {
    return this.httpClient.get<any>(this.filmsUrl)
    .pipe(map(x => x.results));
  }

  public getMovie(id: number): Observable<Movie> {
    const url = `${this.filmsUrl}/${id}`;
    return this.httpClient.get<Movie>(url);
  }
}
