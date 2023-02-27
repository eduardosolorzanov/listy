import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ShoppingElement } from 'src/app/interfaces/interfaces';
import { CurrencyFormatterService } from 'src/app/services/currency-formatter.service';
// import { Animations } from './shopping-element-animations'

@Component({
  selector: 'shopping-element',
  templateUrl: './shopping-element.component.html',
  styleUrls: ['./shopping-element.component.scss'],
})
export class ShoppingElementComponent {

  /* –– Inputs
   * –––––––––––––––––––––– */

  @Input() shoppingElementIndex: number = 0;
  @Input() shoppingElement: ShoppingElement = {
    name: '',
    unitPrice: 0,
    quantity: 0,
    notes: '',
    iconColor: '',
  }
  
  /* –– Outputs
   * –––––––––––––––––––––– */

  @Output() onDeleteShoppingElement = new EventEmitter<number>();
  
  /* –– Constructor
   * –––––––––––––––––––––– */
  
  constructor(private currencyFormatter: CurrencyFormatterService) { }

  ngOnInit(): void {
    this.totalPrice = this.shoppingElement.unitPrice * this.shoppingElement.quantity
    this.formattedTotalPrice = '¢' + this.currencyFormatter.getFormattedPrice(this.totalPrice);
    this.formattedUnitPrice = '¢' + this.currencyFormatter.getFormattedPrice(this.shoppingElement.unitPrice);
  }

  /* –– Variables
  * –––––––––––––––––––––– */

  formattedTotalPrice: string = '';
  formattedUnitPrice: string = '';
  totalPrice: number = 0;
  unitPrince: number = 0;
  isShown: boolean = false;

  /* –– Functions
  * –––––––––––––––––––––– */

  deleteShoppingElement(shoppingElementIndex: number) {
    this.onDeleteShoppingElement.emit(shoppingElementIndex);
  }
}
