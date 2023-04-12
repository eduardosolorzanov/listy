import { createSelector } from "@ngrx/store";
import { AppState } from "./app.reducer";
import { ShoppingElementList } from "../interfaces/interfaces";

export const selectShoppingElementLists= (state: AppState) => state.appShoppingElementLists.shoppingElementLists;

export const selectShoppingElementListByIndex = (shoppingElementListIndex: number) =>
  createSelector(
    selectShoppingElementLists,
    (shoppingElementLists: ShoppingElementList[]) => shoppingElementLists[shoppingElementListIndex]
  );