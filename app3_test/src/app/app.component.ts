import { Component } from '@angular/core';
import { map, observable, Observable, Subject, switchAll } from 'rxjs';
import { Color } from './color';
import { ColorService } from './services/color.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ColorService]
})
export class AppComponent {
  search$ = new Subject<string>();
  results$!: Observable<Color[]>;

  constructor(private colorService: ColorService) {
    this.results$ = this.search$.pipe(
      map(keyword => this.colorService.search(keyword)),
      switchAll()
    );
    
  }
}
