import { Component } from '@angular/core';
import { map, Observable, Observer, of, Subject, switchAll } from 'rxjs';
import { Color } from './color';
import { ColorService } from './services/color.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ColorService]
})
export class AppComponent {
  
  constructor(private colorService: ColorService) {
    const res$ = this.search$.pipe(
      map(keyword => this.colorService.search(keyword)),
      switchAll()
    );
    this.results$ = res$;
  }
  search$ = new Subject<string>();
  results$!: Observable<Color[]>;
}
