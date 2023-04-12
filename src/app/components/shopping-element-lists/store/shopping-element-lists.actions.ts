import { Action } from "@ngrx/store";
import { ShoppingElementList } from "src/app/interfaces/interfaces";

export const ADD_SHOPPING_ELEMEMENT_LIST = 'ADD_SHOPPING_ELEMEMENT_LIST';
export const DELETE_SHOPPING_ELEMEMENT_LIST = 'DELETE_SHOPPING_ELEMEMENT_LIST';

export class AddShoppingElementList implements Action {
  readonly type = ADD_SHOPPING_ELEMEMENT_LIST;
  constructor(public payload: ShoppingElementList ){}
}

export class DeleteShoppingElementList implements Action {
  readonly type = DELETE_SHOPPING_ELEMEMENT_LIST;
  constructor(public payload: number){}
} 

export type ShoppingElementListsActions =  
  | AddShoppingElementList 
  | DeleteShoppingElementList;