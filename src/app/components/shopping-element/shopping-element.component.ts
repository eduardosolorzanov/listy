import { Component, Input } from '@angular/core';
import { ShoppingElement } from 'src/app/interfaces/interfaces';
import { CurrencyFormatterService } from 'src/app/services/currency-formatter.service';
import { Animations } from './shopping-element-animations'

@Component({
  selector: 'shopping-element',
  templateUrl: './shopping-element.component.html',
  styleUrls: ['./shopping-element.component.scss'],
  animations:[Animations.shoppingElementCreationTrigger]
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
  
  constructor(private currencyFormatter: CurrencyFormatterService) { }

  ngOnInit(): void {
    this.totalPrice = this.shoppingElement.unitPrice * this.shoppingElement.quantity
    this.iconColor = this.generateRandomColor();
    this.formattedTotalPrice = '¢' + this.currencyFormatter.getFormattedPrice(this.totalPrice);
    this.formattedUnitPrice = '¢' + this.currencyFormatter.getFormattedPrice(this.shoppingElement.unitPrice);
    console.log(this.isShown)
    this.isShown = true;
    console.log(this.isShown)
  }

  /* –– Variables
  * –––––––––––––––––––––– */

  formattedTotalPrice: string = '';
  formattedUnitPrice: string = '';
  totalPrice: number = 0;
  unitPrince: number = 0;
  iconColor: string = '';
  isShown: boolean = false;

  /* –– Functions
  * –––––––––––––––––––––– */

  generateRandomColor() : string {
    let hue = Math.floor(Math.random() * 360);
    let pastel = 'hsl(' + hue + ', 100%, 80%)';
    return pastel;
  }

  isOpen = true;
  toggle() {
    this.isOpen = !this.isOpen;
    console.log('probando animacion')
  }
}
