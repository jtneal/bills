import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

import { ScheduleComponent } from './schedule.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ScheduleComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatInputModule,
    MatTableModule,
    RouterModule.forChild([
      {
        component: ScheduleComponent,
        path: '',
      },
    ]),
  ],
})
export class ScheduleModule {}
