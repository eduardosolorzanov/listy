import { Action } from "@ngrx/store";
import { ShoppingElement } from "src/app/interfaces/interfaces";

export const ADD_SHOPPING_ELEMENT = 'ADD_SHOPPING_ELEMENT';
export const UPDATE_SHOPPING_ELEMENT = 'UPDATE_SHOPPING_ELEMENT';
export const DELETE_SHOPPING_ELEMENT = 'DELETE_SHOPPING_ELEMENT';

export class AddShoppingElement implements Action {
  readonly type = ADD_SHOPPING_ELEMENT;
  constructor(public payload: {shoppingElement: ShoppingElement} ){}
}

export class UpdateShoppingElement implements Action {
  readonly type = UPDATE_SHOPPING_ELEMENT;
  constructor(public payload: {shoppingElementIndex: number, shoppingElement: ShoppingElement} ){}
}

export class DeleteShoppingElement implements Action {
  readonly type = DELETE_SHOPPING_ELEMENT ;
  constructor(public payload: {shoppingElementIndex: number} ){}
} 

export type ShoppingElementListActions =  
  | AddShoppingElement 
  | UpdateShoppingElement
  | DeleteShoppingElement;
