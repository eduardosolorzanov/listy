import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { ShoppingElement, ShoppingElementList } from '../interfaces/interfaces';
import { ColorGeneratorService } from './color-generator.service copy';

@Injectable({
  providedIn: 'root'
})
export class ShoppingElementListsService {

  /* –– Constructor
   * –––––––––––––––––––––– */

  constructor(private colorGenerator: ColorGeneratorService, private datePipe: DatePipe) {
    // this.setTestShoppingElementLists();
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

  // If found, return list, it not, return empty object
  getShoppingElementList(shoppingElementListIndex: number) {
    let shoppingElementList = <ShoppingElementList>{};
    if( this.shoppingElementLists[shoppingElementListIndex] ) {
      shoppingElementList = { name: '', creationDate: '', shoppingElements: []};
      Object.assign(shoppingElementList, this.shoppingElementLists[shoppingElementListIndex]);
    }
    return shoppingElementList;
  }

  addShoppingElementList(shoppingElementList: ShoppingElementList): void {
    this.shoppingElementLists.push(shoppingElementList);
  }

  deleteShoppingElementList(shoppingElementListIndex: number){
    // Search and delete list
    if( this.shoppingElementLists[shoppingElementListIndex] ) {
      this.shoppingElementLists.splice(shoppingElementListIndex, 1);
    }
  }
  
  addShoppingElement(shoppingElementListIndex: number, shoppingElement: ShoppingElement): void {
    this.shoppingElementLists[shoppingElementListIndex].shoppingElements.push(shoppingElement);
  }

  updateShoppingListName(shoppingElementListIndex: number, newName: string){
    let shoppingElementListToModify = <ShoppingElementList>{};
    // Search and update name
    if( this.shoppingElementLists[shoppingElementListIndex] ) {
      shoppingElementListToModify = this.shoppingElementLists[shoppingElementListIndex];
      shoppingElementListToModify.name = newName;
    }
  }

  setTestShoppingElementLists(): void {
    // const today = new Date();
    // const shoppingListDate = this.datePipe.transform(today, 'dd/MM/yyyy HH:mm')!;
    this.shoppingElementLists = this.testingListA;
  }

  /* –– Testing lists
   * –––––––––––––––––––––– */

  testingListA = [{
    name: 'Lista de prueba 1',
    creationDate: '05/02/2023 10:03',
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
    creationDate: '28/01/2023 11:06',
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
    creationDate: '05/10/2022 09:38',
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
        name: 'Queso',
        unitPrice: 4580,
        quantity: 8,
        iconColor: this.colorGenerator.getRandomColor()
      },
      {
        name: 'Papel de cocina',
        unitPrice: 2384,
        quantity: 4,
        iconColor: this.colorGenerator.getRandomColor()
      },
      {
        name: 'Flores',
        unitPrice: 1340,
        quantity: 2,
        iconColor: this.colorGenerator.getRandomColor()
      },
      {
        name: 'Vino',
        unitPrice: 4000,
        quantity: 2,
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
    creationDate: '14/09/2022 08:24',
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
    creationDate: '10/12/2022 07:48',
    shoppingElements: [
      {
        name: 'Leche deslactosada',
        unitPrice: 5400,
        quantity: 2,
        iconColor: this.colorGenerator.getRandomColor(),
      },
      {
        name: 'Lechuga',
        unitPrice: 300,
        quantity: 6,
        iconColor: this.colorGenerator.getRandomColor()
      },
      {
        name: 'Jabón',
        unitPrice: 1500,
        quantity: 8,
        iconColor: this.colorGenerator.getRandomColor()
      },
      {
        name: 'Maceta',
        unitPrice: 7000,
        quantity: 4,
        iconColor: this.colorGenerator.getRandomColor()
      },
    ]
  },
  {
    name: 'Lista de prueba 6',
    creationDate: '02/01/2023 10:18',
    shoppingElements: [
      {
        name: 'Pescado',
        unitPrice: 3990,
        quantity: 3,
        iconColor: this.colorGenerator.getRandomColor(),
      },
      {
        name: 'Salsa de tomate',
        unitPrice: 3400,
        quantity: 2,
        iconColor: this.colorGenerator.getRandomColor()
      },
      {
        name: 'Silla',
        unitPrice: 12480,
        quantity: 2,
        iconColor: this.colorGenerator.getRandomColor()
      },
      {
        name: 'Bombillos',
        unitPrice: 2200,
        quantity: 5,
        iconColor: this.colorGenerator.getRandomColor()
      },
      {
        name: 'Detergente',
        unitPrice: 3400,
        quantity: 2,
        iconColor: this.colorGenerator.getRandomColor()
      },
    ]
  }];

}
