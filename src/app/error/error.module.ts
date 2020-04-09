import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ErrorComponent } from "./error.component";
import { TranslocoModule } from '@ngneat/transloco';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ErrorComponent],
  imports: [
    CommonModule,
    TranslocoModule,
    RouterModule.forChild([
      {
        component: ErrorComponent,
        data: {
          animation: "error"
        },
        path: "**"
      }
    ])
  ]
})
export class ErrorModule {}
