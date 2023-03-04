import { Component } from '@angular/core';
import { ShoppingElement, ShoppingElementList } from 'src/app/interfaces/interfaces';
import { ColorGeneratorService } from 'src/app/services/color-generator.service copy';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  shoppingElementList: ShoppingElementList = {
    name: 'Compras para cena formal',
    shoppingElements: [
      {
        name: 'Tomate',
        unitPrice: 200,
        quantity: 8,
        notes: 'Muy bueno para cocinar salsas',
        iconColor: this.colorGenerator.getRandomColor(),
      },
      {
        name: 'Albahaca',
        unitPrice: 475.50,
        quantity: 4,
        iconColor: this.colorGenerator.getRandomColor(),
      },
      {
        name: 'Aceite de oliva',
        unitPrice: 3570,
        quantity: 1,
        iconColor: this.colorGenerator.getRandomColor(),
      },
      {
        name: 'Mantel',
        unitPrice: 15600,
        quantity: 1,
        iconColor: this.colorGenerator.getRandomColor(),
      },
    ],
  };

  /* –– Constructor
   * –––––––––––––––––––––– */
  
  constructor(private colorGenerator: ColorGeneratorService) { }

  ngOnInit(): void {}

  /* –– Variables
   * –––––––––––––––––––––– */

  /* –– Functions
   * –––––––––––––––––––––– */

}
