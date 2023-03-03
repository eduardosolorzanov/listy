import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ShoppingElement } from 'src/app/interfaces/interfaces';
import { CurrencyFormatterService } from 'src/app/services/currency-formatter.service';
import {ChangeDetectorRef} from '@angular/core'

@Component({
  selector: 'shopping-element',
  templateUrl: './shopping-element.component.html',
  styleUrls: ['./shopping-element.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ShoppingElementComponent {

  /* –– Inputs
   * –––––––––––––––––––––– */

  @Input() shoppingElementIndex: number = 0;
  @Input() shoppingElement: ShoppingElement = {
    name: '',
    unitPrice: 0.00,
    quantity: 0,
    notes: '',
    iconColor: '',
  }
  
  /* –– Outputs
   * –––––––––––––––––––––– */

  @Output() onDeleteShoppingElement = new EventEmitter<number>();
  @Output() onUpdateShoppingElementUnitPrice = new EventEmitter<number>();
  
  /* –– Properties
   * –––––––––––––––––––––– */

  shoppingElementForm = new FormGroup({
    name: new FormControl(''),
    unitPrice: new FormControl(''),
    quantity: new FormControl(0),
  });

  formattedTotalPrice: string = '';
  totalPrice: number = 0;
  unitPrince: number = 0;
  isShown: boolean = false;
  name: FormControl = new FormControl('');
  nameHtmlElementId: string = '';
  unitPriceHtmlElementId: string = '';
  quantityHtmlElementId: string = '';

  // Editing triggers
  isEditingProductName: boolean = false;
  isEditingProductUnitPrice: boolean = false;
  isEditingProductQuantity: boolean = false;
  isEditingAnyProperty() : boolean{
    return this.isEditingProductName || this.isEditingProductQuantity || this.isEditingProductUnitPrice;
  }

  /* –– Constructor
   * –––––––––––––––––––––– */
  
  constructor(
    private currencyFormatter: CurrencyFormatterService, 
    private formBuilder: FormBuilder,
    private ref: ChangeDetectorRef ) { }

  ngOnInit(): void {
    this.createForm();
    // Call this after creating form to listen for changes
    this.onChanges();
    this.nameHtmlElementId = 'name-textbox-' + this.shoppingElementIndex;
    this.unitPriceHtmlElementId = 'price-textbox-' + this.shoppingElementIndex;
    this.quantityHtmlElementId = 'quantity-textbox-' + this.shoppingElementIndex;
    this.updateTotalPrice();
  }

  /* –– Functions
  * –––––––––––––––––––––– */

  // Update total price from form control values
  updateTotalPrice(){
    // this.totalPrice = this.shoppingElementForm.controls['unitPrice'].value! * this.shoppingElementForm.controls['quantity'].value!
    this.totalPrice = this.shoppingElement.unitPrice * this.shoppingElement.quantity
    this.formattedTotalPrice = this.currencyFormatter.getFormattedPrice(this.totalPrice);
  }

  // Format numbers as currency as user types in unitPrice form control
  formatNumber(value: any){
    return value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // On each key input form control is patched and formatted to match currency format
  onUnitPriceInput(inputElement: any) {
    let inputValue = inputElement?.target?.value;;
    // Check for max length, if longer, slice
    if (inputValue.length < 12) {
      // If decimals are entered, process right and left side and separate by .
      if (inputValue.indexOf(".") >= 0) {
        // Get position of first decimal to prevent multiple decimals from being entered
        let decimalPosition = inputValue.indexOf(".");
        // Split number by decimal point
        let leftSide = inputValue.substring(0, decimalPosition);
        let rightSide = inputValue.substring(decimalPosition);
        // Add commas to left side of number
        leftSide = this.formatNumber(leftSide);
        // Validate right side
        rightSide = this.formatNumber(rightSide);
        // Limit decimal to only 2 digits and join two sides by .
        rightSide = rightSide.substring(0, 2);
        inputValue = "¢" + leftSide + "." + rightSide;
      } else {
        inputValue = "¢" + this.formatNumber(inputValue);
      }
      this.shoppingElementForm.patchValue({ unitPrice: inputValue })
    } else {
      // Slice and patchValue
      inputValue = inputValue.slice(0, -1);
      this.shoppingElementForm.patchValue({ unitPrice: inputValue })
    }
  }

  // On each key input form control is checked for max quantity and patched to form
  onProductQuantityInput(inputElement: any) {
    let inputValue = inputElement?.target?.value;
    // If value has more than 3 digits, slice
    if(inputValue.length > 3){
      inputValue = inputValue.slice(0,-1);
    }
    this.shoppingElementForm.patchValue({quantity: inputValue});
  }

  onChanges(): void {
    // Listen to whole form
    // this.shoppingElementForm.valueChanges.subscribe(valueChange => {
    //   console.log('valueChange', valueChange);
    // });
    this.shoppingElementForm.get('unitPrice')?.valueChanges.subscribe(valueChange => {
      // console.log('Changes in shoppingElementForm: ', this.shoppingElementForm);
    });
  }

  deleteShoppingElement(shoppingElementIndex: number) {
    this.onDeleteShoppingElement.emit(shoppingElementIndex);
  }

  // Initialize form with shoppingElement data
  createForm() {
    this.shoppingElementForm = this.formBuilder.group({
      name: this.shoppingElement.name,
      unitPrice: this.currencyFormatter.getFormattedPrice(this.shoppingElement.unitPrice),
      quantity: this.shoppingElement.quantity,
    });
  }

  editProductName(event: Event) {
    this.toggleEditProductNameMode();
    const nameInputElement = document.getElementById(this.nameHtmlElementId) as HTMLInputElement;
    this.selectText(nameInputElement);
  }

  editProductUnitPrice(event: Event){
    this.toggleEditProductUnitPriceMode();
    const unitPriceInputElement = document.getElementById(this.unitPriceHtmlElementId) as HTMLInputElement;
    this.selectText(unitPriceInputElement);
  }

  editProductQuantity(event: Event){
    this.toggleEditProductQuantityMode();
    const productQuantityInputElement = document.getElementById(this.quantityHtmlElementId) as HTMLInputElement;
    this.selectText(productQuantityInputElement);
  }

  toggleEditProductQuantityMode(){
    this.isEditingProductQuantity = !this.isEditingProductQuantity;
    // Updates DOM because edit quantity form is now visible
    this.ref.detectChanges();
  }
  
  toggleEditProductNameMode(){
    this.isEditingProductName = !this.isEditingProductName;
    // Updates DOM because edit name form is now visible
    this.ref.detectChanges();
  }

  toggleEditProductUnitPriceMode(){
    this.isEditingProductUnitPrice = !this.isEditingProductUnitPrice;
    // Updates DOM because edit unit price form is now visible
    this.ref.detectChanges();
  }

  // Activates all forms for edition
  activateEditAllMode(){
    this.isEditingProductName = true;
    this.isEditingProductUnitPrice = true;
    this.isEditingProductQuantity = true;
  }
  
  // Selects text from input element
  selectText(inputElement: HTMLInputElement) {
    inputElement?.focus();
    inputElement?.select();
  }

  // Check for correct format when saving values
  validateUnitPriceInputControl(){
    let unitPriceCheckedValue = '';
    unitPriceCheckedValue = unitPriceCheckedValue + this.shoppingElementForm.controls['unitPrice'].value;
    // If input is empty, assign ¢0.00 as price
    if(unitPriceCheckedValue === '' || unitPriceCheckedValue === '¢' || unitPriceCheckedValue === '¢.' ){
      unitPriceCheckedValue = '¢0.00';
    }
    // If last character is ., add 00
    if(unitPriceCheckedValue.at(-1) === '.'){
      unitPriceCheckedValue = unitPriceCheckedValue + '00';
    }

    // If unit price has no decimals, add .00
    if (unitPriceCheckedValue.indexOf(".") <= 0) {
      unitPriceCheckedValue = unitPriceCheckedValue + '.00';
    } 
    this.shoppingElementForm.patchValue({unitPrice: unitPriceCheckedValue})    
  }

  validateQuantityInputControl(){
    let quantityCheckedValue = this.shoppingElementForm.controls['quantity'].value!;
    // If input is empty, assign 1
    if(!quantityCheckedValue || quantityCheckedValue < 1){
      quantityCheckedValue = 1;
    }
    this.shoppingElementForm.patchValue({quantity: quantityCheckedValue})    
  }

  validateNameInputControl(){
    let nameCheckedValue = this.shoppingElementForm.controls['name'].value!;
    // If input is empty, assign 1
    if(!nameCheckedValue || nameCheckedValue === ''){
      nameCheckedValue = '(Sin nombre)';
    }
    this.shoppingElementForm.patchValue({name: nameCheckedValue})    
  }

  getPriceInNumberFormat(price: string) : number {
    let priceNumber = price.replaceAll(',', '').replaceAll('¢', '');
    return +priceNumber;
  }

  getPriceInCurrencyFormat(price: number): string{
    return '';
  }

  // Check unit price and toggle editing mode for all elements
  saveChanges(){
    // Validate inputs
    this.validateUnitPriceInputControl();
    this.validateQuantityInputControl();
    this.validateNameInputControl();

    // Update values in shopping element, update total price in card and trigger update in finalPrice in parent component
    this.shoppingElement.name = this.shoppingElementForm.controls['name'].value!;
    this.shoppingElement.unitPrice = this.getPriceInNumberFormat(this.shoppingElementForm.controls['unitPrice'].value!);
    this.shoppingElement.quantity = this.shoppingElementForm.controls['quantity'].value!;
    this.onUpdateShoppingElementUnitPrice.emit(this.shoppingElement.unitPrice);

    this.updateTotalPrice();
    this.isEditingProductName = false;
    this.isEditingProductQuantity = false;
    this.isEditingProductUnitPrice = false;
  }
}
