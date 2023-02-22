import { Component, Input } from '@angular/core';
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
  
  constructor() { }

  ngOnInit(): void {}

  /* –– Variables
   * –––––––––––––––––––––– */

  name: string = "Steve";

  /* –– Functions
   * –––––––––––––––––––––– */

  share(product: string) {
    console.log(product);
  }
}
