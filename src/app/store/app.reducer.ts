import * as fromShoppingElementLists from '../components/shopping-element-lists/store/shopping-element-lists.reducer';
import * as fromDashboard from '../components/dashboard/store/dashboard.reducer';
import { ActionReducerMap } from '@ngrx/store';

/***** This is the initial app state *****/
export const initialState: AppState = {
  appShoppingElementLists: {
    shoppingElementLists: [{
      name: 'Lista de prueba con store 1',
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
      name: 'Lista de prueba 2 con store 2',
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
      name: 'Lista de prueba 3 con store 3',
      creationDate: '05/10/2022 09:38',
      shoppingElements: [
        {
          name: 'Atún',
          unitPrice: 2300,
          quantity: 5,
          iconColor: '#555555',
        },
      ]
    }]
  },
  dashboard: {
    selectedTab: 'Listas',
    isLoading: false,
  }
}

/****** Global state structure ******/
export interface AppState {
  appShoppingElementLists: fromShoppingElementLists.State;
  dashboard: fromDashboard.State;
  // error: string | null;
}

export const appReducer: ActionReducerMap<AppState> = {
  appShoppingElementLists: fromShoppingElementLists.shoppingElementListsReducer,
  dashboard: fromDashboard.dashboardReducer
};
