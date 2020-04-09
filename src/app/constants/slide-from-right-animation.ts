import {
  animate,
  animateChild,
  group,
  query,
  style
} from "@angular/animations";
import { ANIMATION_SPEED } from "./animation-speed";

export const SLIDE_FROM_RIGHT_ANIMATION = [
  style({
    position: "relative"
  }),
  query(":enter", [
    style({
      height: "100vh",
      left: 0,
      overflow: "hidden",
      position: "fixed",
      top: 0,
      width: "100%"
    })
  ]),
  query(":leave", [
    style({
      height: "100vh",
      left: 0,
      overflow: "hidden",
      position: "absolute",
      top: 0,
      width: "100%"
    })
  ]),
  query(":leave", [
    style({
      transform: "translateX(0%)"
    })
  ]),
  group([
    query(":enter", [
      style({
        "z-index": 0
      })
    ]),
    query(":leave", [
      style({
        "z-index": 1
      }),
      animate(
        `${ANIMATION_SPEED}ms ease-out`,
        style({
          transform: "translateX(100%)"
        })
      )
    ])
  ]),
  query(":enter", animateChild())
];
