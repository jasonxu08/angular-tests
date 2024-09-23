import { Injectable } from '@angular/core';
import { ALL_COLORS, Color } from '../color';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  readonly colors : Color[] = ALL_COLORS;

  async search(keyword: string): Promise<Color[]> {
    if (!keyword) return [];

    console.log("Starting search for ", keyword);
    keyword = keyword.toLowerCase();

    await new Promise(res => setTimeout(res, 1000)); // simulate delay

    console.log("Finished search for ", keyword);
    return this.colors
    .filter(color => color.displayName.toLowerCase().includes(keyword));
  }
}
