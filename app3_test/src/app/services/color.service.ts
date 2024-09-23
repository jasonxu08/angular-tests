import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ALL_COLORS, Color } from '../color';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  readonly colors: Color[] = ALL_COLORS;

  async search(keyword: string): Promise<Color[]> {
    if (keyword === '') return [];

    console.log("Searching for keyword: ", keyword);
    //await new Promise(res => setTimeout(res, 1000));

    console.log("Returning results for keyword.");

    return this.colors
    .filter(color => color.displayName.toLowerCase().includes(keyword.toLowerCase()));
  }

  constructor() { }
}
