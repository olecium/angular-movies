import { Character } from './character';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(
    private httpClient: HttpClient
  ) { }

  private charactersUrl = 'https://swapi.co/api/people';

  public getCharacters(): Observable<Character[]> {
    return this.httpClient.get<Character[]>(this.charactersUrl);
  }

  public getMovieCharacters(movieCharacters: String[]): Observable<Character[]> {

    return this.httpClient.get<Character[]>(this.charactersUrl)
      .pipe(map(characters => characters.results.filter(c => movieCharacters.indexOf(c.url) !== -1)));
  }
}
