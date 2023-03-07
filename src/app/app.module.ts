import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingElementListComponent } from './components/shopping-element-list/shopping-element-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ShoppingElementComponent } from './components/shopping-element/shopping-element.component';
import { CurrencyFormatterService } from './services/currency-formatter.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ColorGeneratorService } from './services/color-generator.service copy';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingElementListComponent,
    DashboardComponent,
    ShoppingElementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule
  ],
  providers: [CurrencyFormatterService, ColorGeneratorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
