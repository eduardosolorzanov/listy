import { ChangeDetectorRef, Component, Input, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CurrencyFormatterService } from 'src/app/services/currency-formatter.service';
import { ShoppingElement, ShoppingElementList } from '../../interfaces/interfaces';
import { Output, EventEmitter } from '@angular/core';
import { Animations } from './shopping-element-list-animations';
import { ShoppingElementComponent } from '../shopping-element/shopping-element.component';

@Component({
  selector: 'shopping-element-list',
  templateUrl: './shopping-element-list.component.html',
  styleUrls: ['./shopping-element-list.component.scss'],
  animations:[Animations.shoppingElementsFirstLoadTrigger, Animations.simpleFadeAnimation] 
})
export class ShoppingElementListComponent {

  @ViewChildren(ShoppingElementComponent) public shoppingElementComponents: QueryList<ShoppingElementComponent>;

  // @ViewChild(ShoppingElementComponent) child: ShoppingElementComponent | undefined;

  /* –– Outputs
   * –––––––––––––––––––––– */

  /* –– Inputs
   * –––––––––––––––––––––– */

  /* –– Constructor
   * –––––––––––––––––––––– */
  
  constructor( 
    private currencyFormatter: CurrencyFormatterService, private changeDetectorRef: ChangeDetectorRef  ) { 
    this.shoppingElementComponents = new QueryList<ShoppingElementComponent>;
  }

  ngOnInit(): void {
    this.shoppingElementList = {
      name: 'Compras para cena formal',
      shoppingElements: [
        {
          name: 'Tomate',
          unitPrice: 200,
          quantity: 8,
          notes: 'Muy bueno para cocinar salsas',
          iconColor: this.generateRandomColor(),
        },
        {
          name: 'Albahaca',
          unitPrice: 475.50,
          quantity: 4,
          iconColor: this.generateRandomColor(),
        },
        {
          name: 'Aceite de oliva',
          unitPrice: 3570,
          quantity: 1,
          iconColor: this.generateRandomColor(),
        },
        {
          name: 'Mantel',
          unitPrice: 15600,
          quantity: 1,
          iconColor: this.generateRandomColor(),
        },
      ],
    };
    this.updateFinalPrice();
  }

  // Access children here when done loading
  ngAfterViewInit() {
    // this.changeDetectorRef.detectChanges();
    // console.log("Hello ", this.shoppingElementComponents.last.editProductName());
  }
  
  /* –– Variables
   * –––––––––––––––––––––– */

  finalPrice: number = 0;
  formattedFinalPrice: string = '';
  
  shoppingElementList: ShoppingElementList = {
    name: '',
    shoppingElements: []
  };

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
    // Toggle edition mode on last element back to non edition mode
    this.shoppingElementComponents.last.isEditingProductName = false;
    // Push new element to shopping element list
    let testShoppingElement: ShoppingElement =  {
      name: 'Producto ' + Math.trunc(Math.random()*1000),
      unitPrice: Math.random()*1000,
      quantity: Math.trunc(Math.random()*10) + 1,
      notes: 'Hola',
      iconColor: this.generateRandomColor(),
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
  }

  generateRandomColor() : string {
    let hue = Math.floor(Math.random() * 360);
    let pastel = 'hsl(' + hue + ', 100%, 80%)';
    return pastel;
  }
}
