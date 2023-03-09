import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { AppState, ShoppingElement, ShoppingElementList, User } from 'src/app/interfaces/interfaces';
import { ColorGeneratorService } from 'src/app/services/color-generator.service copy';
import { errorSelector, isLoadingSelector, shoppingElementsSelector } from 'src/app/store/selectors';
import { Animations } from '../../listy-animations';
import * as ShoppingElementsActions from '../../store/actions'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [Animations.emptyStateFadeIn, Animations.simpleFadeAnimation],
})
export class DashboardComponent {

  /* –– Properties
   * –––––––––––––––––––––– */

  userWithEmptyList: User = {
    name: 'Test User', shoppingElementLists: [
      {
        name: 'Lista de prueba',
        shoppingElements: [],
        creationDate: '',
      }
    ]
  }

  userWithNoLists: User = { name: 'Test User', shoppingElementLists: [] }
  user: User = { name: '', shoppingElementLists: [] };
  tabOptions: string[] = ['Listas', 'Ver lista', 'Usuario'];
  selectedTab: string = this.tabOptions[1];
  // isLoading$ : Observable<boolean>;
  // error$: Observable<string | null>;
  // shoppingElements$: Observable<ShoppingElement[]>;
  isLoading: boolean = false;
  private unsubscribe$ = new Subject<void>();

  /* –– Constructor
   * –––––––––––––––––––––– */

  constructor(
    private store: Store<AppState>,
    private datePipe: DatePipe,
    private colorGenerator: ColorGeneratorService) {
    // Initialize observables
    // this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    // this.error$ = this.store.pipe(select(errorSelector));
    // this.shoppingElements$ = this.store.pipe(select(shoppingElementsSelector));
  }

  ngOnInit(): void {
    this.user = this.userWithNoLists;
    // Get properties from observables
    this.store
      .pipe(select(isLoadingSelector), takeUntil(this.unsubscribe$)) // unsubscribe to prevent memory leak
      .subscribe(
        // unwrap observable
        isLoading => this.isLoading = isLoading
      );
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  /* –– Functions
   * –––––––––––––––––––––– */

  // Use when fully implementing store
  fetchShoppingElementList() {
    this.store.dispatch(ShoppingElementsActions.getShoppingElements());
    this.store
      .pipe(select(shoppingElementsSelector), takeUntil(this.unsubscribe$))
      .subscribe(
        shoppingElements => {
          this.user.shoppingElementLists = [{ name: '', shoppingElements: shoppingElements }]
        }
      );
  }

  /********  Testing purposes ********/
  createShoppingList() {
    let today = new Date();
    let shoppingListDate = this.datePipe.transform(today, 'dd/MM/yyyy HH:mm')!;
    let testShoppingElementLists = [{
      name: 'Lista de prueba 1',
      creationDate: shoppingListDate,
      shoppingElements: [
        {
          name: 'Tomate',
          unitPrice: 500,
          quantity: 7,
          iconColor: this.colorGenerator.getRandomColor(),
        },
        {
          name: 'Lechuga',
          unitPrice: 275,
          quantity: 4,
          iconColor: this.colorGenerator.getRandomColor()
        },
        {
          name: 'Cebolla',
          unitPrice: 940,
          quantity: 9,
          iconColor: this.colorGenerator.getRandomColor()
        },
        {
          name: 'Zanahora',
          unitPrice: 290.75,
          quantity: 5,
          iconColor: this.colorGenerator.getRandomColor()
        },
        {
          name: 'Sal',
          unitPrice: 300,
          quantity: 3,
          iconColor: this.colorGenerator.getRandomColor()
        },
        {
          name: 'Pimienta',
          unitPrice: 400,
          quantity: 4,
          iconColor: this.colorGenerator.getRandomColor()
        },
        {
          name: 'Espinaca',
          unitPrice: 670,
          quantity: 9,
          iconColor: this.colorGenerator.getRandomColor()
        },
        {
          name: 'Papas',
          unitPrice: 200,
          quantity: 3,
          iconColor: this.colorGenerator.getRandomColor()
        }
      ]
    },
    {
      name: 'Lista de prueba 2',
      creationDate: shoppingListDate,
      shoppingElements: [
        {
          name: 'Leche',
          unitPrice: 1200,
          quantity: 10,
          iconColor: this.colorGenerator.getRandomColor(),
        },
        {
          name: 'Huevos',
          unitPrice: 1500,
          quantity: 1,
          iconColor: this.colorGenerator.getRandomColor()
        },
        {
          name: 'Pan',
          unitPrice: 100,
          quantity: 3,
          iconColor: this.colorGenerator.getRandomColor()
        },
        {
          name: 'Aceite',
          unitPrice: 1400,
          quantity: 1,
          iconColor: this.colorGenerator.getRandomColor()
        },
        {
          name: 'Mesa',
          unitPrice: 10575,
          quantity: 1,
          iconColor: this.colorGenerator.getRandomColor()
        },
      ]
    },
    {
      name: 'Lista de prueba 3',
      creationDate: shoppingListDate,
      shoppingElements: [
        {
          name: 'Atún',
          unitPrice: 2300,
          quantity: 5,
          iconColor: this.colorGenerator.getRandomColor(),
        },
        {
          name: 'Chocolates',
          unitPrice: 1780,
          quantity: 3,
          iconColor: this.colorGenerator.getRandomColor()
        },
        {
          name: 'Harina',
          unitPrice: 1280,
          quantity: 4,
          iconColor: this.colorGenerator.getRandomColor()
        },
        {
          name: 'Planta',
          unitPrice: 5400,
          quantity: 1,
          iconColor: this.colorGenerator.getRandomColor()
        },
        {
          name: 'Salsa de tomate',
          unitPrice: 2000,
          quantity: 1,
          iconColor: this.colorGenerator.getRandomColor()
        },
        {
          name: 'Ajo',
          unitPrice: 250,
          quantity: 5,
          iconColor: this.colorGenerator.getRandomColor()
        },
        {
          name: 'Albhaca',
          unitPrice: 460,
          quantity: 3,
          iconColor: this.colorGenerator.getRandomColor()
        },
        {
          name: 'Paño',
          unitPrice: 5000,
          quantity: 5,
          iconColor: this.colorGenerator.getRandomColor()
        },
        {
          name: 'Otro producto',
          unitPrice: 2000,
          quantity: 1,
          iconColor: this.colorGenerator.getRandomColor()
        },
        {
          name: 'Otro producto',
          unitPrice: 2000,
          quantity: 1,
          iconColor: this.colorGenerator.getRandomColor()
        },
        {
          name: 'Otro producto',
          unitPrice: 2000,
          quantity: 1,
          iconColor: this.colorGenerator.getRandomColor()
        },
        {
          name: 'Otro producto',
          unitPrice: 2000,
          quantity: 1,
          iconColor: this.colorGenerator.getRandomColor()
        },
        {
          name: 'Otro producto',
          unitPrice: 2000,
          quantity: 1,
          iconColor: this.colorGenerator.getRandomColor()
        },
        {
          name: 'Otro producto',
          unitPrice: 2000,
          quantity: 1,
          iconColor: this.colorGenerator.getRandomColor()
        },
        {
          name: 'Otro producto',
          unitPrice: 2000,
          quantity: 1,
          iconColor: this.colorGenerator.getRandomColor()
        },
        {
          name: 'Otro producto',
          unitPrice: 2000,
          quantity: 1,
          iconColor: this.colorGenerator.getRandomColor()
        },
        {
          name: 'Otro producto',
          unitPrice: 2000,
          quantity: 1,
          iconColor: this.colorGenerator.getRandomColor()
        },
      ]
    },
    {
      name: 'Lista de prueba 4',
      creationDate: shoppingListDate,
      shoppingElements: [
        {
          name: 'Atún',
          unitPrice: 2300,
          quantity: 5,
          iconColor: this.colorGenerator.getRandomColor(),
        },
        {
          name: 'Chocolates',
          unitPrice: 1780,
          quantity: 3,
          iconColor: this.colorGenerator.getRandomColor()
        },
        {
          name: 'Harina',
          unitPrice: 1280,
          quantity: 4,
          iconColor: this.colorGenerator.getRandomColor()
        },
        {
          name: 'Planta',
          unitPrice: 5400,
          quantity: 1,
          iconColor: this.colorGenerator.getRandomColor()
        },
      ]
    },
    {
      name: 'Lista de prueba 5',
      creationDate: shoppingListDate,
      shoppingElements: [
        {
          name: 'Atún',
          unitPrice: 2300,
          quantity: 5,
          iconColor: this.colorGenerator.getRandomColor(),
        },
        {
          name: 'Chocolates',
          unitPrice: 1780,
          quantity: 3,
          iconColor: this.colorGenerator.getRandomColor()
        },
        {
          name: 'Harina',
          unitPrice: 1280,
          quantity: 4,
          iconColor: this.colorGenerator.getRandomColor()
        },
        {
          name: 'Planta',
          unitPrice: 5400,
          quantity: 1,
          iconColor: this.colorGenerator.getRandomColor()
        },
      ]
    },
    {
      name: 'Lista de prueba 6',
      creationDate: shoppingListDate,
      shoppingElements: [
        {
          name: 'Atún',
          unitPrice: 2300,
          quantity: 5,
          iconColor: this.colorGenerator.getRandomColor(),
        },
        {
          name: 'Chocolates',
          unitPrice: 1780,
          quantity: 3,
          iconColor: this.colorGenerator.getRandomColor()
        },
        {
          name: 'Harina',
          unitPrice: 1280,
          quantity: 4,
          iconColor: this.colorGenerator.getRandomColor()
        },
        {
          name: 'Planta',
          unitPrice: 5400,
          quantity: 1,
          iconColor: this.colorGenerator.getRandomColor()
        },
      ]
    }]
    this.user.shoppingElementLists = testShoppingElementLists;
  }
  /********  Testing purposes ********/

  selectViewListsOption() {
    this.selectedTab = this.tabOptions[0];
  }

  selectViewListOption() {
    this.selectedTab = this.tabOptions[1];
  }

  selectUserOption() {
    this.selectedTab = this.tabOptions[2];
  }

  isSelectedTab(tabOption: string) {
    return tabOption === this.selectedTab ? true : false;
  }


}


