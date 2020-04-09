import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";

@NgModule({
  declarations: [HomeComponent],
  imports: [
    RouterModule.forChild([
      {
        component: HomeComponent,
        data: {
          animation: "home"
        },
        path: "**"
      }
    ])
  ]
})
export class HomeModule {}
