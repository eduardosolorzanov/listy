import { createAction, props } from "@ngrx/store";
import { ShoppingElement, ShoppingElementList } from "../interfaces/interfaces";

export const getShoppingElements = createAction('[ShoppingElements] Get ShoppingElements');
export const getShoppingElementsSuccess = createAction(
  '[ShoppingElements] Get ShoppingElements success',
  props<{ shoppingElements: ShoppingElement[] }>()
);
export const getShoppingElementsFailure = createAction(
  '[ShoppingElements] Get ShoppingElements failure',
  props<{ error: string }>()
);

export const getShoppingElementLists = createAction('[ShoppingElementLists] Get ShoppingElementLists');
export const getShoppingElementListsSuccess = createAction(
  '[ShoppingElementLists] Get ShoppingElementLists success',
  props<{ shoppingElementLists: ShoppingElementList[] }>()
);
export const getShoppingElementListsFailure = createAction(
  '[ShoppingElementLists] Get ShoppingElementLists failure',
  props<{ error: string }>()
);

