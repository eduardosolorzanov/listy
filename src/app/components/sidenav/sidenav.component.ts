import { Component, Input } from '@angular/core';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  
  /* –– Inputs
   * –––––––––––––––––––––– */

  @Input() currentTab: number = 0;

  /* –– Properties
   * –––––––––––––––––––––– */

  tabOptions: string[] = ['Listas', 'Ver lista', 'Usuario'];
  selectedTab: string = this.tabOptions[this.currentTab];
  
  /* –– Constructor
   * –––––––––––––––––––––– */

  constructor() {}

  ngOnInit(): void {
    this.selectedTab = this.tabOptions[this.currentTab];
  }

  /* –– Functions
   * –––––––––––––––––––––– */

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
