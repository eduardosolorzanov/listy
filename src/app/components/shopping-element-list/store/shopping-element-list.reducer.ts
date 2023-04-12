import { ShoppingElement } from "src/app/interfaces/interfaces";
import * as ShoppingElementListActions from "./shopping-element-list.actions";

export interface State {
  name: string;
  creationDate?: string;
  shoppingElements: ShoppingElement[];
  totalPrice: number;
}

const initialState: State = {
  name: '',
  creationDate: '',
  shoppingElements: [], 
  totalPrice: 0,
}

export function shoppingElementListReducer( state: State = initialState, action: ShoppingElementListActions.ShoppingElementListActions){
  switch (action.type) {
    case ShoppingElementListActions.ADD_SHOPPING_ELEMENT:
      return {
        ...state,
        shoppingElements: [...state.shoppingElements, action.payload]
      }; 

    case ShoppingElementListActions.DELETE_SHOPPING_ELEMENT:
      return {
        ...state,
        shoppingElements: state.shoppingElements.filter( (_shoppingElement, shoppingElementIndex) => {
          return shoppingElementIndex !== action.payload.shoppingElementIndex;
        })
      };
    case ShoppingElementListActions.UPDATE_TOTAL_PRICE:
      return {
        ...state,
        totalPrice: action.payload
      }; 
    
    default:
      return state;
  }
}