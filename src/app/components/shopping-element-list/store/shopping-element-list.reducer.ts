import { ShoppingElement } from "src/app/interfaces/interfaces";
import * as ShoppingElementListActions from "./shopping-element-list.actions";

export interface State {
  name: string;
  creationDate?: string;
  shoppingElements: ShoppingElement[];
}

const initialState: State = {
  name: '',
  creationDate: '',
  shoppingElements: [], 
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
        shoppingElements: state.shoppingElements.filter( (shoppingElement, shoppingElementIndex) => {
          return shoppingElementIndex !== action.payload.shoppingElementIndex;
        })
      };
    default:
      return state;
  }
}