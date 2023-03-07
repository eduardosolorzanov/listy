import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { ShoppingElement } from '../interfaces/interfaces';

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
      },
      {
        name: 'Lechuga',
        unitPrice: 700,
        quantity: 3,
      },
      {
        name: 'Cebolla',
        unitPrice: 375.50,
        quantity: 11,
      }
    ]
    return of(shoppingElements).pipe(delay(2000));
  }

  constructor() { }
}
