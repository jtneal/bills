import { Component } from '@angular/core';

import { AccountsService } from './accounts.service';

@Component({
  selector: 'bills-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
})
export class AccountsComponent {
  public displayedColumns = ['account', 'amount', 'cadence', 'firstDueDate', 'method', 'notes'];
  public accounts$ = this.service.getAccounts();

  public constructor(private readonly service: AccountsService) {}
}
