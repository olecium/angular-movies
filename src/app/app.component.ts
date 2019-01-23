import { MoviesService } from './movies.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [MoviesService]
})
export class AppComponent {
  title = 'Movies App';
}
