import { Action } from "@ngrx/store";
import { ShoppingElement } from "src/app/interfaces/interfaces";

export const ADD_SHOPPING_ELEMENT = 'ADD_SHOPPING_ELEMENT';
export const UPDATE_SHOPPING_ELEMENT = 'UPDATE_SHOPPING_ELEMENT';
export const DELETE_SHOPPING_ELEMENT = 'DELETE_SHOPPING_ELEMENT';
export const UPDATE_TOTAL_PRICE = 'UPDATE_FINAL_PRICE';

export class AddShoppingElement implements Action {
  readonly type = ADD_SHOPPING_ELEMENT;
  constructor(public payload: {shoppingElement: ShoppingElement} ){}
}

// TODO: implemet this
export class UpdateShoppingElement implements Action {
  readonly type = UPDATE_SHOPPING_ELEMENT;
  constructor(public payload: {shoppingElementIndex: number, shoppingElement: ShoppingElement} ){}
}

export class DeleteShoppingElement implements Action {
  readonly type = DELETE_SHOPPING_ELEMENT ;
  constructor(public payload: {shoppingElementIndex: number} ){}
}

// TODO: Implement this
export class UpdateTotalPrice implements Action {
  readonly type = UPDATE_TOTAL_PRICE ;
  constructor(public payload: {price: number} ){}
}

export type ShoppingElementListActions =  
  | AddShoppingElement 
  | UpdateShoppingElement
  | DeleteShoppingElement
  | UpdateTotalPrice;
