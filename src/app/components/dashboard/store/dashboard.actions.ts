import { Action } from "@ngrx/store";

export const SET_SELECTED_TAB = 'SET_SELECTED_TAB';
export const SET_IS_LOADING = 'SET_IS_LOADING';

export class SetSelectedTab implements Action {
  readonly type = SET_SELECTED_TAB;
  constructor(public payload: string ){}
}

export class SetIsLoading implements Action {
  readonly type = SET_IS_LOADING;
  constructor(public payload: boolean){}
} 

export type DashboardActions =  
  | SetSelectedTab 
  | SetIsLoading;