import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { ShoppingElementList } from '../interfaces/interfaces';
import { ColorGeneratorService } from './color-generator.service copy';

@Injectable({
  providedIn: 'root'
})
export class ShoppingElementListsService {

  /* –– Constructor
   * –––––––––––––––––––––– */

  constructor(private colorGenerator: ColorGeneratorService, private datePipe: DatePipe) {
    this.setTestShoppingElementLists();
    this.getShoppingElementList(1);
  }
  
  ngOnInit(): void {}

  /* –– Properties
   * –––––––––––––––––––––– */

  shoppingElementLists: ShoppingElementList[] = []
  
  /* –– Functions
   * –––––––––––––––––––––– */

  getShoppingElementLists(): ShoppingElementList[]{
    return this.shoppingElementLists;
  }

  getShoppingElementList(shoppingElementListIndex: number): ShoppingElementList{
    let shoppingElementList = { name: '', shoppingElements: []}
    if( this.shoppingElementLists[shoppingElementListIndex] ) {
      Object.assign(shoppingElementList, this.shoppingElementLists[shoppingElementListIndex]);
    }
    return shoppingElementList;
  }

  setTestShoppingElementLists(): void {
    const today = new Date();
    const shoppingListDate = this.datePipe.transform(today, 'dd/MM/yyyy HH:mm')!;
    this.shoppingElementLists = [{
      name: 'Lista de prueba 1',
      creationDate: shoppingListDate,
      shoppingElements: [
        {
          name: 'Tomate',
          unitPrice: 500,
          quantity: 7,
          iconColor: this.colorGenerator.getRandomColor(),
        },
        {
          name: 'Lechuga',
          unitPrice: 275,
          quantity: 4,
          iconColor: this.colorGenerator.getRandomColor()
        },
        {
          name: 'Cebolla',
          unitPrice: 940,
          quantity: 9,
          iconColor: this.colorGenerator.getRandomColor()
        },
        {
          name: 'Zanahora',
          unitPrice: 290.75,
          quantity: 5,
          iconColor: this.colorGenerator.getRandomColor()
        },
        {
          name: 'Sal',
          unitPrice: 300,
          quantity: 3,
          iconColor: this.colorGenerator.getRandomColor()
        },
        {
          name: 'Pimienta',
          unitPrice: 400,
          quantity: 4,
          iconColor: this.colorGenerator.getRandomColor()
        },
        {
          name: 'Espinaca',
          unitPrice: 670,
          quantity: 9,
          iconColor: this.colorGenerator.getRandomColor()
        },
        {
          name: 'Papas',
          unitPrice: 200,
          quantity: 3,
          iconColor: this.colorGenerator.getRandomColor()
        }
      ]
    },
    {
      name: 'Lista de prueba 2',
      creationDate: shoppingListDate,
      shoppingElements: [
        {
          name: 'Leche',
          unitPrice: 1200,
          quantity: 10,
          iconColor: this.colorGenerator.getRandomColor(),
        },
        {
          name: 'Huevos',
          unitPrice: 1500,
          quantity: 1,
          iconColor: this.colorGenerator.getRandomColor()
        },
        {
          name: 'Pan',
          unitPrice: 100,
          quantity: 3,
          iconColor: this.colorGenerator.getRandomColor()
        },
        {
          name: 'Aceite',
          unitPrice: 1400,
          quantity: 1,
          iconColor: this.colorGenerator.getRandomColor()
        },
        {
          name: 'Mesa',
          unitPrice: 10575,
          quantity: 1,
          iconColor: this.colorGenerator.getRandomColor()
        },
      ]
    },
    {
      name: 'Lista de prueba 3',
      creationDate: shoppingListDate,
      shoppingElements: [
        {
          name: 'Atún',
          unitPrice: 2300,
          quantity: 5,
          iconColor: this.colorGenerator.getRandomColor(),
        },
        {
          name: 'Chocolates',
          unitPrice: 1780,
          quantity: 3,
          iconColor: this.colorGenerator.getRandomColor()
        },
        {
          name: 'Harina',
          unitPrice: 1280,
          quantity: 4,
          iconColor: this.colorGenerator.getRandomColor()
        },
        {
          name: 'Planta',
          unitPrice: 5400,
          quantity: 1,
          iconColor: this.colorGenerator.getRandomColor()
        },
        {
          name: 'Salsa de tomate',
          unitPrice: 2000,
          quantity: 1,
          iconColor: this.colorGenerator.getRandomColor()
        },
        {
          name: 'Ajo',
          unitPrice: 250,
          quantity: 5,
          iconColor: this.colorGenerator.getRandomColor()
        },
        {
          name: 'Albhaca',
          unitPrice: 460,
          quantity: 3,
          iconColor: this.colorGenerator.getRandomColor()
        },
        {
          name: 'Paño',
          unitPrice: 5000,
          quantity: 5,
          iconColor: this.colorGenerator.getRandomColor()
        },
        {
          name: 'Otro producto',
          unitPrice: 2000,
          quantity: 1,
          iconColor: this.colorGenerator.getRandomColor()
        },
        {
          name: 'Otro producto',
          unitPrice: 2000,
          quantity: 1,
          iconColor: this.colorGenerator.getRandomColor()
        },
        {
          name: 'Otro producto',
          unitPrice: 2000,
          quantity: 1,
          iconColor: this.colorGenerator.getRandomColor()
        },
        {
          name: 'Otro producto',
          unitPrice: 2000,
          quantity: 1,
          iconColor: this.colorGenerator.getRandomColor()
        },
        {
          name: 'Otro producto',
          unitPrice: 2000,
          quantity: 1,
          iconColor: this.colorGenerator.getRandomColor()
        },
        {
          name: 'Otro producto',
          unitPrice: 2000,
          quantity: 1,
          iconColor: this.colorGenerator.getRandomColor()
        },
        {
          name: 'Otro producto',
          unitPrice: 2000,
          quantity: 1,
          iconColor: this.colorGenerator.getRandomColor()
        },
        {
          name: 'Otro producto',
          unitPrice: 2000,
          quantity: 1,
          iconColor: this.colorGenerator.getRandomColor()
        },
        {
          name: 'Otro producto',
          unitPrice: 2000,
          quantity: 1,
          iconColor: this.colorGenerator.getRandomColor()
        },
      ]
    },
    {
      name: 'Lista de prueba 4',
      creationDate: shoppingListDate,
      shoppingElements: [
        {
          name: 'Atún',
          unitPrice: 2300,
          quantity: 5,
          iconColor: this.colorGenerator.getRandomColor(),
        },
        {
          name: 'Chocolates',
          unitPrice: 1780,
          quantity: 3,
          iconColor: this.colorGenerator.getRandomColor()
        },
        {
          name: 'Harina',
          unitPrice: 1280,
          quantity: 4,
          iconColor: this.colorGenerator.getRandomColor()
        },
        {
          name: 'Planta',
          unitPrice: 5400,
          quantity: 1,
          iconColor: this.colorGenerator.getRandomColor()
        },
      ]
    },
    {
      name: 'Lista de prueba 5',
      creationDate: shoppingListDate,
      shoppingElements: [
        {
          name: 'Atún',
          unitPrice: 2300,
          quantity: 5,
          iconColor: this.colorGenerator.getRandomColor(),
        },
        {
          name: 'Chocolates',
          unitPrice: 1780,
          quantity: 3,
          iconColor: this.colorGenerator.getRandomColor()
        },
        {
          name: 'Harina',
          unitPrice: 1280,
          quantity: 4,
          iconColor: this.colorGenerator.getRandomColor()
        },
        {
          name: 'Planta',
          unitPrice: 5400,
          quantity: 1,
          iconColor: this.colorGenerator.getRandomColor()
        },
      ]
    },
    {
      name: 'Lista de prueba 6',
      creationDate: shoppingListDate,
      shoppingElements: [
        {
          name: 'Atún',
          unitPrice: 2300,
          quantity: 5,
          iconColor: this.colorGenerator.getRandomColor(),
        },
        {
          name: 'Chocolates',
          unitPrice: 1780,
          quantity: 3,
          iconColor: this.colorGenerator.getRandomColor()
        },
        {
          name: 'Harina',
          unitPrice: 1280,
          quantity: 4,
          iconColor: this.colorGenerator.getRandomColor()
        },
        {
          name: 'Planta',
          unitPrice: 5400,
          quantity: 1,
          iconColor: this.colorGenerator.getRandomColor()
        },
      ]
    }];
  }
}
