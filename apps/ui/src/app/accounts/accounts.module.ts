import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';

import { AccountsComponent } from './accounts.component';

@NgModule({
  declarations: [AccountsComponent],
  imports: [
    CommonModule,
    MatTableModule,
    RouterModule.forChild([
      {
        component: AccountsComponent,
        path: '',
      },
    ]),
  ],
})
export class AccountsModule {}
