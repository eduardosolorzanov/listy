import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ShoppingElementListComponent } from './components/shopping-element-list/shopping-element-list.component';

const routes: Routes = [
  { path: '**', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'shopping-element-list', component: ShoppingElementListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
