import { Component } from '@angular/core';
import { ShoppingElement, ShoppingElementList } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  /* –– Constructor
   * –––––––––––––––––––––– */
  
  constructor() { }

  ngOnInit(): void {}

  /* –– Variables
   * –––––––––––––––––––––– */

  name: string = "Steve";
  testShoppingElementList: ShoppingElementList = {
    name: 'Compras para cena formal',
    shoppingElements: [
      {
        name: 'Tomate',
        unitPrice: 200,
        quantity: 8,
        notes: 'Muy bueno para cocinar salsas'
      },
      {
        name: 'Albahaca',
        unitPrice: 475,
        quantity: 4,
      },
      {
        name: 'Aceite de oliva',
        unitPrice: 3570,
        quantity: 1,
      },
      {
        name: 'Mantel',
        unitPrice: 15600,
        quantity: 1,
      },
    ],
  }

  /* –– Functions
   * –––––––––––––––––––––– */

  share(product: string) {
    console.log(product);
  }

}
