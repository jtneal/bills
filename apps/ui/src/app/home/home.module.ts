import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MatListModule,
    RouterModule.forChild([
      {
        component: HomeComponent,
        path: '',
      },
    ]),
  ],
})
export class HomeModule {}
