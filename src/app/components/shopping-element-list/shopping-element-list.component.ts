import { ChangeDetectorRef, Component, Input, QueryList, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { CurrencyFormatterService } from 'src/app/services/currency-formatter.service';
import { AppState, ShoppingElement, ShoppingElementList } from '../../interfaces/interfaces';
import { Output, EventEmitter } from '@angular/core';
import { Animations } from '../../listy-animations';
import { ShoppingElementComponent } from '../shopping-element/shopping-element.component';
import { ColorGeneratorService } from 'src/app/services/color-generator.service copy';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { isLoadingSelector, shoppingElementsSelector } from 'src/app/store/selectors';
import * as ShoppingElementsActions from '../../store/actions'
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingElementListsService } from 'src/app/services/shopping-element-lists.service';

@Component({
  selector: 'shopping-element-list',
  templateUrl: './shopping-element-list.component.html',
  styleUrls: ['./shopping-element-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations:[Animations.simpleFadeAnimation, Animations.emptyStateFadeIn], 
  providers: [DatePipe]
})
export class ShoppingElementListComponent {

  /* –– Inputs
   * –––––––––––––––––––––– */

  /* –– Properties
   * –––––––––––––––––––––– */
  shoppingElementListIndex: number = 0;
  shoppingElementList: ShoppingElementList = {
    name: '',
    creationDate: '',
    shoppingElements: []
  };

  @ViewChildren(ShoppingElementComponent) public shoppingElementComponents: QueryList<ShoppingElementComponent>;
  finalPrice: number = 0;
  formattedFinalPrice: string = '';
  shoppingElementListForm = new FormGroup({
    name: new FormControl(''),
  });
  // Editing triggers
  isEditingShoppingElementListName: boolean = false;
  // To identify and select shopping element list name
  shoppingElementListNameHtmlElementId: string = '';

  isLoading: boolean = false;
  private unsubscribe$ = new Subject<void>();

  /* –– Constructor
   * –––––––––––––––––––––– */
  
  constructor( 
  private currencyFormatter: CurrencyFormatterService, 
  private changeDetectorRef: ChangeDetectorRef,
  private colorGenerator: ColorGeneratorService,
  private formBuilder: FormBuilder,
  private store: Store<AppState>,
  private route: ActivatedRoute,
  private router: Router,
  private shoppingElementListsService: ShoppingElementListsService) { 
    this.shoppingElementComponents = new QueryList<ShoppingElementComponent>;
  }
  
  ngOnInit(): void {
    // Get shopping list id from url
    this.shoppingElementListIndex = +this.route.snapshot.url[1].path || 0;
    console.log('searchedShoppingElementList', this.shoppingElementList);
    // If there's no list found, redirect to shopping list dashboard, else, continue to load
    if(this.isEmptyObject(this.shoppingElementListsService.getShoppingElementList(this.shoppingElementListIndex))){
      this.router.navigateByUrl('shopping-lists');
    } else {
      // Assign shopping list
      this.shoppingElementList = this.shoppingElementListsService.getShoppingElementList(this.shoppingElementListIndex);
      // Create form from shoppingElementList object
      this.createShoppingElementListForm();

      // Calculate final price
      this.updateFinalPrice();

      // Focus on name when opening list
      this.shoppingElementListNameHtmlElementId = 'shopping-element-list-name-textbox';
      this.toggleEditShoppingElementListNameMode();
      const shoppingElementListInputElement = document.getElementById(this.shoppingElementListNameHtmlElementId) as HTMLInputElement;
      this.focusInputElement(shoppingElementListInputElement);
    }

    // Get properties from observables
    this.store
      .pipe(select(isLoadingSelector), takeUntil(this.unsubscribe$)) // unsubscribe to prevent memory leak
      .subscribe(
        // unwrap observable
        isLoading => this.isLoading = isLoading
    ); 

  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  // Access children here when done loading
  ngAfterViewInit() {}

  /* –– Functions
   * –––––––––––––––––––––– */

  isEmptyObject(shoppingElementList: ShoppingElementList) {
    return (shoppingElementList && (Object.keys(shoppingElementList).length === 0));
  }

  // Selects text from input element
  focusInputElement(inputElement: HTMLInputElement) {
    inputElement?.focus();
    inputElement?.select();
  }

  toggleEditShoppingElementListNameMode(){
    this.isEditingShoppingElementListName = !this.isEditingShoppingElementListName;
    // Updates DOM because edit name form is now visible
    this.changeDetectorRef.detectChanges();
  }

  // Initialize form with shoppingElement data
  createShoppingElementListForm() {
    this.shoppingElementListForm = this.formBuilder.group({
      name: this.shoppingElementList.name,
    });
  }

  getTotalPrice(shoppingElementList: ShoppingElementList){
    let totalPrice = 0;
    if(shoppingElementList.shoppingElements.length > 0){
      shoppingElementList.shoppingElements.forEach(shoppingElement => {
        totalPrice += shoppingElement.unitPrice * shoppingElement.quantity;
      });
    }
    return totalPrice;
  }

  updateFinalPrice(){
    this.finalPrice = this.getTotalPrice(this.shoppingElementList);
    this.formattedFinalPrice = this.currencyFormatter.getFormattedPrice(this.finalPrice);
  }

  editShoppingElementListName(){
    this.toggleEditShoppingElementListNameMode();
    const shoppingElementListNameInputElement = document.getElementById(this.shoppingElementListNameHtmlElementId) as HTMLInputElement;
    this.focusInputElement(shoppingElementListNameInputElement);
  }

  addShoppingElement() {
    // Toggle edition mode on last element back to non edition mode, if list has at least 1 element
    if( this.shoppingElementComponents.length > 0) {
      this.shoppingElementComponents.last.isEditingProductName = false;
    }
    // Push new element to shopping element list
    // 
    let newShoppingElement: ShoppingElement =  {
      name: 'Nuevo producto',
      unitPrice: 0,
      quantity: 1,
      iconColor: this.colorGenerator.getRandomColor(),
    };
    this.shoppingElementListsService.addShoppingElement(+this.shoppingElementListIndex, newShoppingElement);
    // Update final price
    this.updateFinalPrice();
    // Detect changes on DOM and focus on new element's name form
    this.changeDetectorRef.detectChanges();
    this.shoppingElementComponents.last.editProductName();
    // Scroll to new element
    this.scrollToBottom();
  }

  deleteShoppingElement(shoppingElementIndex: number) {
    this.shoppingElementList.shoppingElements.splice(shoppingElementIndex, 1);
    this.updateFinalPrice();
    this.changeDetectorRef.detectChanges();
  }

  // Check unit price and toggle editing mode for all elements
  saveChanges(){
    // Validate inputs
    this.validateShoppingElementListNameInputControl();
    // Update name value in shoppingElementList
    this.shoppingElementList.name = this.shoppingElementListForm.controls['name'].value!;
    // Update name with shopping element service
    this.shoppingElementListsService.updateShoppingListName(this.shoppingElementListIndex, this.shoppingElementListForm.controls['name'].value!);
    // Toggle editing mode
    this.isEditingShoppingElementListName = false;
  }

  scrollToBottom(){
    window.scrollTo(0, document.body.scrollHeight);
  }

  validateShoppingElementListNameInputControl(){
    let shoppingElementListValue = this.shoppingElementListForm.controls['name'].value!;
    // If input is empty, assign name
    if(shoppingElementListValue === ''){
      shoppingElementListValue = '(Lista sin nombre)';
    }
    this.shoppingElementListForm.patchValue({name: shoppingElementListValue})    
  }

  // On each key input form control is checked for max characters and patched
  // Max input: 30 characters
  onShoppingElementListFormInput(inputElement: any) {
    let inputValue = inputElement?.target?.value;
    // If value has more than 32 characters, slice
    if(inputValue.length > 30){
      inputValue = inputValue.slice(0,-1);
    }
    this.shoppingElementListForm.patchValue({name: inputValue});
  }
}
