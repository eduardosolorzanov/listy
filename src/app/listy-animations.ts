import { animate, state, style, transition, trigger } from "@angular/animations";

export const Animations = {
  // the fade-in/fade-out animation. 
  simpleFadeAnimation: trigger('simpleFadeAnimation', [
    // the "in" style determines the "resting" state of the element when it is visible.
    state('in', style({
      opacity: 1,
    })),

    // fade in when created. this could also be written as transition('void => *')
    transition(':enter', [
      style({
        opacity: 0,
      }),
      animate('300ms cubic-bezier(0.83, 0, 0.17, 1)')
    ]),

    // fade out when destroyed. this could also be written as transition('void => *')
    transition(':leave',
      animate('300ms cubic-bezier(0.83, 0, 0.17, 1)', style({ 
        opacity: 0, 
      })),
    )
  ]),
  emptyStateFadeIn: trigger('emptyStateFadeInTrigger', [
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
  ]),
}