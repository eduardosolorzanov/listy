import { Component, Input } from '@angular/core';
import { CurrencyFormatterService } from 'src/app/services/currency-formatter.service';
import { ShoppingElement, ShoppingElementList } from '../../interfaces/interfaces';

@Component({
  selector: 'shopping-element-list',
  templateUrl: './shopping-element-list.component.html',
  styleUrls: ['./shopping-element-list.component.scss']
})
export class ShoppingElementListComponent {

  /* –– Inputs
   * –––––––––––––––––––––– */

  @Input() shoppingElementList: ShoppingElementList = {
    name: '', 
    shoppingElements: []
  }
  
  /* –– Constructor
   * –––––––––––––––––––––– */
  
  constructor( private currencyFormatter: CurrencyFormatterService ) { }

  ngOnInit(): void {
    this.finalPrice = this.getTotalPrice(this.shoppingElementList)
    this.formattedFinalPrice = '¢' + this.currencyFormatter.getFormattedPrice(this.finalPrice);
  }

  /* –– Variables
   * –––––––––––––––––––––– */

  name: string = "Steve";
  finalPrice: number = 0;
  formattedFinalPrice: string = '';

  /* –– Functions
   * –––––––––––––––––––––– */

  share(product: string) {
    console.log(product);
  }

  getTotalPrice(shoppingElementList: ShoppingElementList){
    let totalPrice = 0;
    shoppingElementList.shoppingElements.forEach(shoppingElement => {
      totalPrice += shoppingElement.unitPrice * shoppingElement.quantity;
    });
    return totalPrice;
  }
}
