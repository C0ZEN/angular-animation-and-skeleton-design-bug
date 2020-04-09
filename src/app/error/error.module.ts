import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ErrorComponent } from "./error.component";

@NgModule({
  declarations: [ErrorComponent],
  imports: [
    RouterModule.forChild([
      {
        component: ErrorComponent,
        data: {
          name: "error"
        },
        path: "**"
      }
    ])
  ]
})
export class ErrorModule {}
