import { Component, Input } from '@angular/core';
import { ShoppingElementList } from 'src/app/interfaces/interfaces';
import { ColorGeneratorService } from 'src/app/services/color-generator.service copy';
import { CurrencyFormatterService } from 'src/app/services/currency-formatter.service';

@Component({
  selector: 'shopping-element-lists',
  templateUrl: './shopping-element-lists.component.html',
  styleUrls: ['./shopping-element-lists.component.scss']
})
export class ShoppingElementListsComponent {

  /* –– Inputs
   * –––––––––––––––––––––– */

  @Input() shoppingElementLists: ShoppingElementList[] = [];

  /* –– Properties
   * –––––––––––––––––––––– */

  shoppingElementPreviewCardMaxCharacters: number = 297;

  /* –– Constructor
   * –––––––––––––––––––––– */

  constructor(private currencyFormatter: CurrencyFormatterService, ) { }

  ngOnInit(): void {
    console.log(this.shoppingElementLists);
  }

  /* –– Functions
   * –––––––––––––––––––––– */

  getShoppingElementsPreview(shoppingElementList: ShoppingElementList, maxCharacters: number){
    let shoppingElementsPreview: string = '';
    let totalListPrice = 0;
    shoppingElementList.shoppingElements.forEach((shoppingElement, index) => {
      const totalProductPrice = shoppingElement.unitPrice * shoppingElement.quantity;
      totalListPrice += totalProductPrice;
      const formattedTotalPrice = this.currencyFormatter.getFormattedPrice(totalProductPrice);
      shoppingElementsPreview += `${shoppingElement.quantity} ${shoppingElement.name} - ${formattedTotalPrice}`;
      // Don't add line change to last line
      if (!(index === shoppingElementList.shoppingElements.length - 1)){ 
        // console.log("Last callback call at index " + idx + " with value " + i ); 
        shoppingElementsPreview += '\n';
      }
    });

    // If shoppingElementsPreview exceeds characters limit, slice and add ellipsis
    // Card supports 27 characters per line with 8 lines as maximum
    const maxNumberOfLines = 8;
    const charactersPerLine = 27;
    const numberOfLines = shoppingElementsPreview.split(/\r\n|\r|\n/).length;
    if(numberOfLines > maxNumberOfLines){
      shoppingElementsPreview = shoppingElementsPreview.substring(0, maxNumberOfLines * charactersPerLine) + '...';
    }
    
    // Add total price in last line
    shoppingElementsPreview += '\n\n' + 'Total: ' + this.currencyFormatter.getFormattedPrice(totalListPrice);
    return shoppingElementsPreview
  }

}
