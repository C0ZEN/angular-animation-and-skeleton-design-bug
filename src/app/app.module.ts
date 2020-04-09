import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      [
        {
          loadChildren: () =>
            import("./error/error.module").then(m => m.ErrorModule),
          path: "error"
        },
        {
          loadChildren: () =>
            import("./home/home.module").then(m => m.HomeModule),
          path: "home"
        },
        {
          path: "**",
          redirectTo: "home"
        }
      ],
      {
        paramsInheritanceStrategy: "always"
      }
    )
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
