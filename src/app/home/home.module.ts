import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { TranslocoModule } from '@ngneat/transloco';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    TranslocoModule,
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
