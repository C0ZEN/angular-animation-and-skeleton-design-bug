import { Component } from "@angular/core";
import { Renderer2 } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { PAGE_ANIMATION } from "./constants/page-animation";

@Component({
  animations: [PAGE_ANIMATION],
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public constructor(private readonly renderer: Renderer2) {}

  public prepareRoute(routerOutlet: RouterOutlet): string | null {
    if (routerOutlet) {
      if (routerOutlet.activatedRouteData) {
        return routerOutlet.activatedRouteData["animation"];
      }
    }

    return null;
  }

  public animationStart(): void {
    console.log('animationStart');
    this.renderer.addClass(document.body, "body-animation");
  }

  public animationEnd(): void {
    console.log('animationEnd');
    this.renderer.removeClass(document.body, "body-animation");
  }
}
