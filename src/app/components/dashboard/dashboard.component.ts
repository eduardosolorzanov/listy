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

  userWithEmptyList: User = {name: 'Test User', shoppingElementLists: [
    {
      name: 'Lista de prueba',
      shoppingElements: [],
      creationDate: '',
    }
  ]}

  userWithNoLists: User = {name: 'Test User', shoppingElementLists: []}
  user: User = {name: '', shoppingElementLists: []};
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
  private datePipe: DatePipe) {
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
  fetchShoppingElementList(){
    this.store.dispatch(ShoppingElementsActions.getShoppingElements());
    this.store
      .pipe(select(shoppingElementsSelector), takeUntil(this.unsubscribe$))
      .subscribe(
        shoppingElements => {
          this.user.shoppingElementLists = [{name: '', shoppingElements: shoppingElements }]
        }
      ); 
  }

  createShoppingList(){
    let today = new Date();
    let shoppingListDate = this.datePipe.transform(today, 'dd/MM/yyyy HH:mm')!;
    let testShoppingElementList = { 
      name: 'Nueva lista', 
      creationDate: shoppingListDate,
      shoppingElements: []
    };
    this.user.shoppingElementLists.push(testShoppingElementList);
  }

  selectViewListsOption(){
    this.selectedTab = this.tabOptions[0];
  }

  selectViewListOption(){
    this.selectedTab = this.tabOptions[1];
  }

  selectUserOption(){
    this.selectedTab = this.tabOptions[2];
  }

  isSelectedTab(tabOption: string){
    return tabOption === this.selectedTab ? true : false;
  }
  

}


