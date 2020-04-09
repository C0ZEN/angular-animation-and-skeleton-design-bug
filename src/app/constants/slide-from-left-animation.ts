import {
  animate,
  animateChild,
  group,
  query,
  style
} from "@angular/animations";
import { ANIMATION_SPEED } from "./animation-speed";

export const SLIDE_FROM_LEFT_ANIMATION = [
  style({
    position: "relative"
  }),
  query(":enter", [
    style({
      height: "100vh",
      left: 0,
      position: "absolute",
      top: 0,
      width: "100%"
    })
  ]),
  query(":leave", [
    style({
      height: "100vh",
      left: 0,
      position: "fixed",
      top: 0,
      width: "100%"
    })
  ]),
  query(":enter", [
    style({
      transform: "translateX(100%)"
    })
  ]),
  group([
    query(":leave", [
      style({
        "z-index": 0
      })
    ]),
    query(":enter", [
      style({
        "z-index": 1
      }),
      animate(
        `${ANIMATION_SPEED}ms ease-out`,
        style({
          transform: "translateX(0%)"
        })
      )
    ])
  ]),
  query(":enter", animateChild())
];
