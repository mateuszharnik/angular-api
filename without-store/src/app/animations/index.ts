import {
  trigger,
  query,
  style,
  animate,
  transition,
  group
} from "@angular/animations";

export const routerFade = trigger("routerFade", [
  transition("* <=> *", [
    group([
      query(
        ":enter",
        [style({ opacity: 0 }), animate("0.5s 0.5s", style({ opacity: 1 }))],
        { optional: true }
      ),
      query(
        ":leave",
        [style({ opacity: 1 }), animate("0.5s", style({ opacity: 0 }))],
        { optional: true }
      )
    ])
  ])
]);

export const fade = trigger("fade", [
  transition("void => true", [
    style({ opacity: 0 }),
    animate("0.5s", style({ opacity: 1 }))
  ]),
  transition("void => false", [
    style({ opacity: 0 }),
    animate("0.5s 0.5s", style({ opacity: 1 }))
  ]),
  transition("false => void", [
    style({ opacity: 1 }),
    animate("0.5s", style({ opacity: 0 }))
  ]),
  transition("true => void", [
    style({ opacity: 1 }),
    animate("0.5s", style({ opacity: 0 }))
  ])
]);
