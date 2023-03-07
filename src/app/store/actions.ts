import { createAction, props } from "@ngrx/store";
import { ShoppingElement } from "../interfaces/interfaces";

export const getShoppingElements = createAction('[ShoppingElements] Get ShoppingElements');
export const getShoppingElementsSuccess = createAction(
  '[ShoppingElements] Get ShoppingElements success',
  props<{shoppingElements: ShoppingElement[]}>()
  );
export const getShoppingElementsFailure = createAction(
  '[ShoppingElements] Get ShoppingElements failure',
  props<{error: string}>()
  );

