import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingElementListComponent } from './components/shopping-element-list/shopping-element-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ShoppingElementComponent } from './components/shopping-element/shopping-element.component';
import { ShoppingElementListHeaderComponent } from './components/shopping-element-list-header/shopping-element-list-header.component';
import { CurrencyFormatterService } from './services/currency-formatter.service';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingElementListComponent,
    DashboardComponent,
    ShoppingElementComponent,
    ShoppingElementListHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [CurrencyFormatterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
