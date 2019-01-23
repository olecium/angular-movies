import { Movie } from './movie';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    return this.httpClient.get<Movie[]>(this.filmsUrl);
  }

  public getMovie(id: number): Observable<Movie> {
    const url = `${this.filmsUrl}/${id}`;
    return this.httpClient.get<Movie>(url);
  }
}
