import { createReducer, on } from "@ngrx/store";
import { ShoppingElementsState } from "../interfaces/interfaces";
import * as ShoppingElementsActions from './actions';

export const initialState: ShoppingElementsState = {
  isLoading: false,
  name: '',
  shoppingElements: [],
  error: null
}

export const reducers = createReducer(
  initialState, 
  // When getting shopping elements, update state property isLoading to true, and return state
  on(ShoppingElementsActions.getShoppingElements, (state) =>({...state, isLoading: true})),
  on(ShoppingElementsActions.getShoppingElementsSuccess, (state, action) =>({
    ...state, 
    isLoading: false,
    shoppingElements: action.shoppingElements,
  })),
  on(ShoppingElementsActions.getShoppingElementsFailure, (state, action) =>({
    ...state, 
    isLoading: false,
    error: action.error,
  }))
);