import {
  trigger,
  animate,
  style,
  transition,
  keyframes
} from '@angular/core';

var startingStyles = (styles) => {
//  styles['position'] = 'fixed';
//  styles['top'] = 60;
//  styles['left'] = 0;
//  styles['right'] = 0;
//  styles['height'] = '100%';
  return styles;
}

export const routeAnimation = trigger('route', [
  transition(':enter', [
    style({transform: 'translateX(-100%)'}),
    animate('0.4s ease-in', style({transform: 'translateX(0%)'}))
  ]),
  transition(':leave', [
    style({transform: 'translateX(0)'}),
    animate('0.4s ease-out', style({transform: 'translateX(100%)'}))
  ])
]);


export function animateRoute2(name) {
  return trigger(name, [
    transition(':enter', [
      //  style({opacity: 1}),
      animate('0.2s ease-in', keyframes([
        style({transform: 'translateX(-5%)', offset: 0}),
        style({transform: 'translateX(2%)', offset: 0.85}),
        style({transform: 'translateX(0%)', offset: 1})
      ]))
    ]),
    // transition(':leave', [
    //   style({opacity: 1}),
    //    animate('0.1s ease-out')
    //  ])
  ]);
}

