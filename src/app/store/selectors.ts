import { createSelector } from "@ngrx/store";
import { AppState } from "../interfaces/interfaces";

// Get specific slice of global state
// OLD
// export const selectFeature = (state: AppState) => state.shoppingElements;
export const selectFeature = (state: AppState) => state;

export const isLoadingSelector = createSelector(
  selectFeature,
  (state) => state.isLoading
);

export const shoppingElementsSelector = createSelector(
  selectFeature,
  // OLD 
  // (state) => state.shoppingElements
  (state) => state.shoppingElementLists
);

export const errorSelector = createSelector(
  selectFeature,
  (state) => state.error
);

