import { AppTitleService } from './app-title.service';
import { Title } from '@angular/platform-browser';
import { MoviesService } from './movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [MoviesService]
})
export class AppComponent implements OnInit{
  title: String;

  constructor(private appTitleService: AppTitleService) { }

  ngOnInit() {
    this.appTitleService.getTitle().subscribe(appTitle => this.title = appTitle);
  }
}
