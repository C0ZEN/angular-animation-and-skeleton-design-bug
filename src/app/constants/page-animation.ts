import { transition, trigger } from "@angular/animations";
import { SLIDE_FROM_LEFT_ANIMATION } from "./slide-from-left-animation";
import { SLIDE_FROM_RIGHT_ANIMATION } from "./slide-from-right-animation";

export const PAGE_ANIMATION = trigger("pageAnimation", [
  transition(`home => error`, SLIDE_FROM_LEFT_ANIMATION),
  transition(`error => home`, SLIDE_FROM_RIGHT_ANIMATION)
]);
