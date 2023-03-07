import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { ShoppingElement, ShoppingElementList, User } from 'src/app/interfaces/interfaces';
import { ColorGeneratorService } from 'src/app/services/color-generator.service copy';
import { Animations } from '../../listy-animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [Animations.emptyStateFadeIn, Animations.simpleFadeAnimation],
})
export class DashboardComponent {

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
  selectedTab: string = this.tabOptions[0];

  /* –– Constructor
   * –––––––––––––––––––––– */
  
  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.user = this.userWithNoLists;
  }

  /* –– Variables
   * –––––––––––––––––––––– */

  /* –– Functions
   * –––––––––––––––––––––– */

  createShoppingList(){
    let today = new Date();
    let shoppingListDate = this.datePipe.transform(today, 'dd/MM/yyyy HH:mm')!;
    let testShoppingElementList = { 
      name: 'Nueva lista', 
      creationDate: shoppingListDate,
      shoppingElements: [
      {
        name: 'Test list',
        unitPrice: 300,
        quantity: 4,
      }
    ]};
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


