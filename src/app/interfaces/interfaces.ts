/* –– Interfaces
 * –––––––––––––––––––––– */

export interface ShoppingElement {
  name: string;
  unitPrice: number;
  quantity: number;
  notes?: string;
  iconColor?: string;
}

export interface ShoppingElementList {
  name: string;
  shoppingElements: ShoppingElement[];
}