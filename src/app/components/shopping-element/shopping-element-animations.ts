import { animate, style, transition, trigger } from "@angular/animations";

export const Animations = {
  shoppingElementCreationTrigger: trigger('myInsertRemoveTrigger', [
  transition ( ':enter', [
    // Style before entering DOM 
    style({
      // opacity: 0,
      position: 'relative',
      bottom: '95px', 
    }),
    // Style after entering DOM 
    animate('1000ms cubic-bezier(0.83, 0, 0.17, 1)', style({ 
      // opacity: 1,
      backGroundColor: 'red',
      marginRight: '0px',
      position: 'relative',
      bottom: '0px' 
    })),
  ]),  // alias for void => *
  transition ( ':leave', [ 
    animate('500ms', style({ opacity: 0 })) 
  ]),  // alias for * => void
])}