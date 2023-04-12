import { ShoppingElementList } from "src/app/interfaces/interfaces";
import * as ShoppingElementListsActions from "./shopping-element-lists.actions";

const testingListA = [{
  name: 'Lista de prueba 1',
  creationDate: '05/02/2023 10:03',
  shoppingElements: [
    {
      name: 'Tomate',
      unitPrice: 500,
      quantity: 7,
      iconColor: '#555555',
    },
  ]
},
{
  name: 'Lista de prueba 2',
  creationDate: '28/01/2023 11:06',
  shoppingElements: [
    {
      name: 'Leche',
      unitPrice: 1200,
      quantity: 10,
      iconColor: '#555555',
    },
  ]
},
{
  name: 'Lista de prueba 3',
  creationDate: '05/10/2022 09:38',
  shoppingElements: [
    {
      name: 'Atún',
      unitPrice: 2300,
      quantity: 5,
      iconColor: '#555555',
    },
  ]
}];


export interface State {
  shoppingElementLists: ShoppingElementList[];
}

export const initialState: State = {
  shoppingElementLists: testingListA,
}

export function shoppingElementListsReducer(
  state: State = initialState, 
  action: ShoppingElementListsActions.ShoppingElementListsActions){
  switch (action.type) {
    case ShoppingElementListsActions.ADD_SHOPPING_ELEMEMENT_LIST:
      return {
        ...state,
        shoppingElementLists: [...state.shoppingElementLists, action.payload]
      }; 

    case ShoppingElementListsActions.DELETE_SHOPPING_ELEMEMENT_LIST:
      return {
        ...state,
        shoppingElementLists: state.shoppingElementLists.filter( (shoppingElementList, shoppingElementListIndex) => {
          return shoppingElementListIndex !== action.payload;
        })
      };
    default:
      return state;
  }
}