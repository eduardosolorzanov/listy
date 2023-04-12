import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ShoppingElement, ShoppingElementList } from 'src/app/interfaces/interfaces';
import { Animations } from 'src/app/listy-animations';
import { ColorGeneratorService } from 'src/app/services/color-generator.service copy';
import { CurrencyFormatterService } from 'src/app/services/currency-formatter.service';
import { ShoppingElementListsService } from 'src/app/services/shopping-element-lists.service';
import * as ShoppingElementListsActions from './store/shopping-element-lists.actions';
import * as fromShoppingElementLists from './store/shopping-element-lists.reducer';
import * as fromApp from '../../store/app.reducer'

@Component({
  selector: 'shopping-element-lists',
  templateUrl: './shopping-element-lists.component.html',
  styleUrls: ['./shopping-element-lists.component.scss'],
  animations: [Animations.emptyStateFadeIn, Animations.simpleFadeAnimation],
})
export class ShoppingElementListsComponent {

  /* –– Inputs
   * –––––––––––––––––––––– */

  @Input() shoppingElementLists: ShoppingElementList[] = [];

  /* –– Outputs
   * –––––––––––––––––––––– */

  /* –– Properties
   * –––––––––––––––––––––– */

  shoppingElementPreviewCardMaxCharacters: number = 297;
  shoppingElementLists$: Observable<{
    shoppingElementLists: ShoppingElementList[],
  }>;

  private subscription: Subscription;

  /* –– Constructor
   * –––––––––––––––––––––– */

  constructor(
    private currencyFormatter: CurrencyFormatterService, 
    private shoppingElementListsService: ShoppingElementListsService, 
    private datePipe: DatePipe,
    private changeDetectorRef: ChangeDetectorRef,
    private store: Store< fromApp.AppState >
    ) { 

    }

  ngOnInit(): void {
    // this.shoppingElementLists$ = this.store.select('shoppingElementLists');
    this.subscription = this.store.select('appShoppingElementLists').subscribe(
      ( stateData) => {
        this.shoppingElementLists = stateData.shoppingElementLists; 
      }
    );
    /***** TESTING *****/ 
    // this.shoppingElementLists = this.shoppingElementListsService.getShoppingElementLists();
    /***** TESTING *****/ 
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
    // If list is empty, don't add line changes before total price
    if(shoppingElementList.shoppingElements.length > 0){
      shoppingElementsPreview += '\n\n';
    }
    shoppingElementsPreview += 'Total: ' + this.currencyFormatter.getFormattedPrice(totalListPrice);
    return shoppingElementsPreview
  }

  displayShoppingListDetail(shoppingElementListIndex: number){
    console.log('displayShoppingListDetail ', shoppingElementListIndex);
  }

  // Push a new empty list
  addShoppingList(){
    const today = new Date();
    const shoppingListDate = this.datePipe.transform(today, 'dd/MM/yyyy HH:mm')!;
    const newShoppingElementList: ShoppingElementList = {
      name: 'Nueva lista',
      creationDate: shoppingListDate,
      shoppingElements: [],
    };
    this.store.dispatch(new ShoppingElementListsActions.AddShoppingElementList(newShoppingElementList));


    // this.shoppingElementListsService.addShoppingElementList(newShoppingElementList);
    // Detect changes to update document.body and scroll properly to bottom
    this.changeDetectorRef.detectChanges();
    this.scrollToBottom();
  }

  deleteShoppingElementList(shoppingElementListIndex: number){
    this.store.dispatch(new ShoppingElementListsActions.DeleteShoppingElementList(shoppingElementListIndex));
    // this.shoppingElementListsService.deleteShoppingElementList(deleteShoppingElementListIndex);
  }

  scrollToBottom(){
    console.log('scroll')
    window.scrollTo(0, document.body.scrollHeight);
  }

}
