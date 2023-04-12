import * as DashboardActions from './dashboard.actions';

export interface State {
  selectedTab: string;
  isLoading: boolean;
}

const initialState: State = {
  selectedTab: 'Listas',
  isLoading: false
}

export function dashboardReducer( state: State = initialState, action: DashboardActions.DashboardActions){
  switch (action.type) {
    case DashboardActions.SET_SELECTED_TAB:
      return {
        ...state,
        selectedTab: action.payload
      }; 

    case DashboardActions.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    default:
      return state;
  }
}