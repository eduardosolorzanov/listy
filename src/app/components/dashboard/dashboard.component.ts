import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { AppState, ShoppingElement, ShoppingElementList, User } from 'src/app/interfaces/interfaces';
import { ColorGeneratorService } from 'src/app/services/color-generator.service copy';
import { ShoppingElementListsService } from 'src/app/services/shopping-element-lists.service';
import { Animations } from '../../listy-animations';

@Component({
  selector: 'dashboard',
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

  selectedShoppingElementListIndex: number = 0;
  userWithNoLists: User = { name: 'Test User', shoppingElementLists: [] }
  user: User = { name: '', shoppingElementLists: [] };
  // isLoading$ : Observable<boolean>;
  // error$: Observable<string | null>;
  // shoppingElements$: Observable<ShoppingElement[]>;
  isLoading: boolean = false;
  private unsubscribe$ = new Subject<void>();

  /* –– Constructor
   * –––––––––––––––––––––– */

  constructor(
    private shoppingElementListsService: ShoppingElementListsService,
    private route: ActivatedRoute) {
    // Initialize observables
    // this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    // this.error$ = this.store.pipe(select(errorSelector));
    // this.shoppingElements$ = this.store.pipe(select(shoppingElementsSelector));
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  /* –– Functions
   * –––––––––––––––––––––– */

  // getCurrentSelectedOption(){

  //   // console.log(this.route.snapshot.url[0].path);
  //   // console.log(this.route.snapshot.url[0].path || '');
  //   let currentRoute = this.route.snapshot.url[0]?.path
  //   console.log(currentRoute);

  //   // Get shopping list id from url
  //   // this.shoppingElementListIndex = this.route.snapshot.url[1].path || '';

  //   // Fetch shoppingElementList
  //   // this.shoppingElementList = this.shoppingElementListsService.getShoppingElementList(+this.shoppingElementListIndex);
  // }

  // Use when fully implementing store
  // fetchShoppingElementList() {
  //   this.store.dispatch(ShoppingElementsActions.getShoppingElements());
  //   this.store
  //     .pipe(select(shoppingElementsSelector), takeUntil(this.unsubscribe$))
  //     .subscribe(
  //       shoppingElementLists => {
  //         this.user.shoppingElementLists = shoppingElementLists;
  //       }
  //     );
  // }

  /********  Testing purposes ********/
  setTestShoppingLists() {
    this.user.shoppingElementLists = this.shoppingElementListsService.getShoppingElementLists();
  }
  /********  Testing purposes ********/

}


