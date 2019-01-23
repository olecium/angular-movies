import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class AppTitleService {
  private title = new BehaviorSubject<String>('Star Wars');
  private title$ = this.title.asObservable();

  constructor(
    private titleService: Title
  ) {}

  setTitle(title: String) {
    this.title.next(title);
    //this.titleService.setTitle(title);
  }

  getTitle(): Observable<String> {
    return this.title$;
  }
}
