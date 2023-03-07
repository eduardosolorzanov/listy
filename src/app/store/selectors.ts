import { createSelector } from "@ngrx/store";
import { AppState } from "../interfaces/interfaces";

// Get specific slice of global state
export const selectFeature = (state: AppState) => state.shoppingElements;

export const isLoadingSelector = createSelector(
  selectFeature,
  (state) => state.isLoading
);

export const shoppingElementsSelector = createSelector(
  selectFeature,
  (state) => state.shoppingElements
);

export const errorSelector = createSelector(
  selectFeature,
  (state) => state.error
);

