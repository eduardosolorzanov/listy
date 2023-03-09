import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { ShoppingElement } from '../interfaces/interfaces';
import { ColorGeneratorService } from './color-generator.service copy';

@Injectable({
  providedIn: 'root'
})
export class ShoppingElementsService {

  getShoppingElements(): Observable<ShoppingElement[]>{
    const shoppingElements = [
      {
        name: 'Tomate',
        unitPrice: 400,
        quantity: 5,
        iconColor: this.colorGenerator.getRandomColor()
      },
      {
        name: 'Lechuga',
        unitPrice: 700,
        quantity: 3,
        iconColor: this.colorGenerator.getRandomColor()
      },
      {
        name: 'Cebolla',
        unitPrice: 375.50,
        quantity: 11,
        iconColor: this.colorGenerator.getRandomColor()
      }
    ]
    return of(shoppingElements).pipe(delay(2000));
  }

  constructor(private colorGenerator: ColorGeneratorService) { }
}
