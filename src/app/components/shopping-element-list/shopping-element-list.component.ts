import { ChangeDetectorRef, Component, Input, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CurrencyFormatterService } from 'src/app/services/currency-formatter.service';
import { ShoppingElement, ShoppingElementList } from '../../interfaces/interfaces';
import { Output, EventEmitter } from '@angular/core';
import { Animations } from './shopping-element-list-animations';
import { ShoppingElementComponent } from '../shopping-element/shopping-element.component';
import { ColorGeneratorService } from 'src/app/services/color-generator.service copy';

@Component({
  selector: 'shopping-element-list',
  templateUrl: './shopping-element-list.component.html',
  styleUrls: ['./shopping-element-list.component.scss'],
  animations:[Animations.shoppingElementsFirstLoadTrigger, Animations.simpleFadeAnimation, Animations.emptyStateFadeIn] 
})
export class ShoppingElementListComponent {

  /* –– Inputs
   * –––––––––––––––––––––– */

  @Input() shoppingElementList: ShoppingElementList = {
    name: '',
    shoppingElements: []
  };

  /* –– Variables
   * –––––––––––––––––––––– */

  @ViewChildren(ShoppingElementComponent) public shoppingElementComponents: QueryList<ShoppingElementComponent>;
  finalPrice: number = 0;
  formattedFinalPrice: string = '';

  /* –– Constructor
   * –––––––––––––––––––––– */
  
  constructor( 
  private currencyFormatter: CurrencyFormatterService, 
  private changeDetectorRef: ChangeDetectorRef,
  private colorGenerator: ColorGeneratorService ) { 
    this.shoppingElementComponents = new QueryList<ShoppingElementComponent>;
  }

  ngOnInit(): void {
    
    this.updateFinalPrice();
  }

  // Access children here when done loading
  ngAfterViewInit() {
    // this.changeDetectorRef.detectChanges();
    // console.log("Hello ", this.shoppingElementComponents.last.editProductName());
  }

  /* –– Functions
   * –––––––––––––––––––––– */

  getTotalPrice(shoppingElementList: ShoppingElementList){
    let totalPrice = 0;
    shoppingElementList.shoppingElements.forEach(shoppingElement => {
      totalPrice += shoppingElement.unitPrice * shoppingElement.quantity;
    });
    return totalPrice;
  }

  updateFinalPrice(){
    this.finalPrice = this.getTotalPrice(this.shoppingElementList);
    this.formattedFinalPrice = this.currencyFormatter.getFormattedPrice(this.finalPrice);
  }

  addShoppingElement(product: any) {
    // Toggle edition mode on last element back to non edition mode, if list has at least 1 element
    if( this.shoppingElementComponents.length > 0) {
      this.shoppingElementComponents.last.isEditingProductName = false;
    }
    // Push new element to shopping element list
    let testShoppingElement: ShoppingElement =  {
      name: 'Producto ' + Math.trunc(Math.random()*1000),
      unitPrice: Math.random()*1000,
      quantity: Math.trunc(Math.random()*10) + 1,
      notes: 'Hola',
      iconColor: this.colorGenerator.getRandomColor(),
    };
    this.shoppingElementList.shoppingElements.push(testShoppingElement);
    // Update final price
    this.updateFinalPrice();
    // Detect changes on DOM and focus on new element's name form
    this.changeDetectorRef.detectChanges();
    this.shoppingElementComponents.last.editProductName();
    // Scroll to new element
    this.scrollToBottom();
  }

  scrollToBottom(){
    window.scrollTo(0, document.body.scrollHeight);
  }

  deleteShoppingElement(shoppingElementIndex: number) {
    this.shoppingElementList.shoppingElements.splice(shoppingElementIndex, 1);
    this.updateFinalPrice();
    this.changeDetectorRef.detectChanges();
  }
}
