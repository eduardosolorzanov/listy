import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { ShoppingElementsService } from "../services/shopping-elements.service";
import * as ShoppingElementsActions from './actions';

@Injectable()
export class ShoppingElementsEffects {

  constructor( private actions$: Actions, private shoppingElementsService: ShoppingElementsService ){}

  getShoppingElements$ = createEffect(() => 
    this.actions$.pipe(
      ofType(ShoppingElementsActions.getShoppingElements),
      mergeMap(()=> {
        return this.shoppingElementsService.getShoppingElements().pipe(
          map((shoppingElements) => ShoppingElementsActions.getShoppingElementsSuccess({ shoppingElements })),
          catchError((error) => 
            of(ShoppingElementsActions.getShoppingElementsFailure({error: error.message}))
          )
        );
      })
    )
  );
  
}