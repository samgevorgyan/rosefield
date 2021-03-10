import {
  trigger,
  animate,
  transition,
  style,
  query,
} from '@angular/animations';

export const fadeInAnimation =
  // trigger name for attaching this animation to an element using the [@triggerName] syntax
  trigger('fadeInAnimation', [
    // route 'enter' transition
    transition('* <=> *', [
      // css styles at start of transition
      style({ opacity: 0.5 }),

      // animation and styles at end of transition
      animate('.5s', style({ opacity: 1 })),
    ]),
  ]);
