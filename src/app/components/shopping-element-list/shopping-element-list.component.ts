import { Component } from '@angular/core';
import { ShoppingElement } from '../../interfaces/interfaces';

@Component({
  selector: 'shopping-element-list',
  templateUrl: './shopping-element-list.component.html',
  styleUrls: ['./shopping-element-list.component.scss']
})
export class ShoppingElementListComponent {

  /* –– Constructor
   * –––––––––––––––––––––– */
  
  constructor() { }

  ngOnInit(): void {
    console.log('hola estoy iniciando');
  }

  /* –– Variables
   * –––––––––––––––––––––– */

  name: string = "Steve";

  products: ShoppingElement[] = [
    {
      name: 'tomate',
      price: 50,
      description: 'un tomatito'
    },
    {
      name: 'pera',
      price: 30,
      description: 'una perita'
    },
    {
      name: 'mango',
      price: 100,
      description: 'un mango, muy deli'
    },
  ]

  /* –– Functions
   * –––––––––––––––––––––– */

  share(product: string) {
    console.log(product);
  }
}
