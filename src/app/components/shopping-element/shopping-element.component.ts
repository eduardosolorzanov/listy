import { Component, Input } from '@angular/core';
import { ShoppingElement } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'shopping-element',
  templateUrl: './shopping-element.component.html',
  styleUrls: ['./shopping-element.component.scss']
})
export class ShoppingElementComponent {

  /* –– Inputs
   * –––––––––––––––––––––– */

  @Input() shoppingElement: ShoppingElement = {
    name: '',
    unitPrice: 0,
    quantity: 0,
    notes: '',
  } 
  
  /* –– Constructor
   * –––––––––––––––––––––– */
  
  constructor() { }

  ngOnInit(): void {
    this.totalPrice = this.shoppingElement.unitPrice * this.shoppingElement.quantity
    this.iconColor = this.generateRandomColor();
    console.log('totalPrice: ', this.totalPrice);
    console.log('iconColor: ', this.iconColor);
  }

  /* –– Variables
  * –––––––––––––––––––––– */

  totalPrice: number = 0;
  iconColor: string = '';

  /* –– Functions
  * –––––––––––––––––––––– */

  generateRandomColor() : string {
    let hue = Math.floor(Math.random() * 360);
    let pastel = 'hsl(' + hue + ', 100%, 80%)';
    return pastel;
  }

}
