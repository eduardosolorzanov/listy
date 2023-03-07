import { ChangeDetectorRef, Component } from '@angular/core';
import { ShoppingElement, ShoppingElementList, User } from 'src/app/interfaces/interfaces';
import { ColorGeneratorService } from 'src/app/services/color-generator.service copy';
import { Animations } from '../../shopping-element-list-animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [Animations.emptyStateFadeIn, Animations.simpleFadeAnimation],
})
export class DashboardComponent {

  user: User = {name: 'Test User', shoppingElementLists: [
    {
      name: 'Lista de prueba',
      shoppingElements: []
    }
  ]}

  /* –– Constructor
   * –––––––––––––––––––––– */
  
  constructor(private colorGenerator: ColorGeneratorService, private changeDetectorRef: ChangeDetectorRef,) { }

  ngOnInit(): void {}

  /* –– Variables
   * –––––––––––––––––––––– */

  /* –– Functions
   * –––––––––––––––––––––– */

  createShoppingList(){
    let testShoppingElementList = { name: 'Nueva lista', shoppingElements: [
      {
        name: 'Test list',
        unitPrice: 300,
        quantity: 4,
      }
    ]};
    this.user.shoppingElementLists.push(testShoppingElementList);
  }
}
