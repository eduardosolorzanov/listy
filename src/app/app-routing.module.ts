import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ShoppingElementListComponent } from './components/shopping-element-list/shopping-element-list.component';
import { ShoppingElementListsComponent } from './components/shopping-element-lists/shopping-element-lists.component';

const routes: Routes = [
  // { path: '**', component: DashboardComponent },
  { path: '', redirectTo: '/shopping-lists', pathMatch: 'full' },
  // { path: 'dashboard', component: DashboardComponent },
  { path: 'shopping-lists', component: ShoppingElementListsComponent },
  { path: 'shopping-list-detail/:index', component: ShoppingElementListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
