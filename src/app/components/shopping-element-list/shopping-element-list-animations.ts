import { animate, query, stagger, state, style, transition, trigger } from "@angular/animations";

export const Animations = {
  // Fade in list when first loading
  shoppingElementsFirstLoadTrigger: trigger('shoppingElementsFirstLoadTrigger', [
    state('in', style({
      opacity: 1,
    })),
    transition ( ':enter', [
      // Style before entering DOM 
      style({
        opacity: 0,
      }),
      // Style after entering DOM 
      animate('1000ms cubic-bezier(0.83, 0, 0.17, 1)', style({ 
        opacity: 1, 
      })),
    ]),  // alias for void => *
    transition ( ':leave', [ 
      animate('1000ms', style({ opacity: 0 })) 
      // alias for * => void
    ]),
  ]),
  // the fade-in/fade-out animation. 
  simpleFadeAnimation: trigger('modifyShoppingElementListTrigger', [
    // the "in" style determines the "resting" state of the element when it is visible.
    state('in', style({
      opacity: 1,
    })),

    // fade in when created. this could also be written as transition('void => *')
    transition(':enter', [
      style({
        opacity: 0,
      }),
      animate('500ms cubic-bezier(0.83, 0, 0.17, 1)')
    ]),

    // fade out when destroyed. this could also be written as transition('void => *')
    transition(':leave',
      animate('500ms cubic-bezier(0.83, 0, 0.17, 1)', style({ 
        opacity: 0, 
      })),
    )
  ]),
}