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
import { DatePipe } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { ShoppingElementsEffects } from './store/shopping-elements-effects';
import { ShoppingElementListsComponent } from './components/shopping-element-lists/shopping-element-lists.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingElementListComponent,
    DashboardComponent,
    ShoppingElementComponent,
    ShoppingElementListsComponent,
    SidenavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      // logOnly: environment.production, // Restrict extension to log-only mode
      // autoPause: true,
      // logOnly: false,
    }),
    // This create a new slice of shoppingElements inside our state
    StoreModule.forFeature('shoppingElements', reducers),
    EffectsModule.forFeature([ShoppingElementsEffects]),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSidenavModule
  ],
  providers: [CurrencyFormatterService, ColorGeneratorService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
