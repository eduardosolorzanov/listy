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
  
  constructor(
    private currencyFormatter: CurrencyFormatterService, 
    private formBuilder: FormBuilder,
    private ref: ChangeDetectorRef ) { }

  ngOnInit(): void {
    this.createForm();
    this.nameElementId = 'name-textbox-' + this.shoppingElementIndex;
    this.totalPrice = this.shoppingElement.unitPrice * this.shoppingElement.quantity
    this.formattedTotalPrice = '¢' + this.currencyFormatter.getFormattedPrice(this.totalPrice);
    this.formattedUnitPrice = '¢' + this.currencyFormatter.getFormattedPrice(this.shoppingElement.unitPrice);
  }

  /* –– Variables
  * –––––––––––––––––––––– */

  // shoppingElementForm: FormGroup = this.formBuilder.group({
  //   'name': '',
  //   'unitPrice': 0,
  //   'quantity': 0,
  //   'notes': '',
  //   'iconColor': '',
  // });

  shoppingElementForm = new FormGroup({
    name: new FormControl(''),
    quantity: new FormControl(0),
  });

  formattedTotalPrice: string = '';
  formattedUnitPrice: string = '';
  totalPrice: number = 0;
  unitPrince: number = 0;
  isShown: boolean = false;
  name: FormControl = new FormControl('');
  editMode: boolean = false;
  nameElementId: string = '';

  /* –– Functions
  * –––––––––––––––––––––– */

  deleteShoppingElement(shoppingElementIndex: number) {
    this.onDeleteShoppingElement.emit(shoppingElementIndex);
  }

  // Initialize form with shoppingElement data
  createForm() {
    this.shoppingElementForm = this.formBuilder.group({
      name: this.shoppingElement.name,
      quantity: this.shoppingElement.quantity,
    });
  }

  onSubmit(post: any) {
    console.log(post)
  }

  toggleEditMode(event: Event){
    this.editMode = !this.editMode;
    this.ref.detectChanges();
    this.selectText(event);
  }  

  selectText(event: Event) {
    // this.ref.detectChanges();
    const input = document.getElementById(this.nameElementId) as HTMLInputElement;
    input?.focus();
    input?.select();
  }
}
