/* –– Interfaces
 * –––––––––––––––––––––– */

export interface User {
  name: string;
  shoppingElementLists: ShoppingElementList[];
}

export interface ShoppingElement {
  name: string;
  unitPrice: number;
  quantity: number;
  notes?: string;
  iconColor: string;
}

export interface ShoppingElementList {
  name: string;
  creationDate?: string;
  shoppingElements: ShoppingElement[];
}

/***** Store *****/ 

export interface ShoppingElementsState {
  isLoading: boolean;
  name: string;
  creationDate?: string;
  shoppingElements: ShoppingElement[];
  error: string | null;
}

// Global state
export interface AppState {
  shoppingElements: ShoppingElementsState;
}



