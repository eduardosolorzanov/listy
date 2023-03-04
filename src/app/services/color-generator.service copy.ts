import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorGeneratorService {

  constructor() { }

  getRandomColor() : string {
    let hue = Math.floor(Math.random() * 360);
    let pastel = 'hsl(' + hue + ', 100%, 80%)';
    return pastel;
  }
}
