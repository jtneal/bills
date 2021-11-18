import { Account, Payment } from '@bills/common';
import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { Observable } from 'rxjs';

import { AccountsService } from './accounts.service';

@Controller('accounts')
export class AccountsController {
  public constructor(private readonly service: AccountsService) {}

  @Get()
  public getAccounts(): Observable<Account[]> {
    return this.service.getAccounts();
  }

  @Get('schedule/:year')
  public getSchedule(@Param('year', ParseIntPipe) year: number): Observable<Payment[]> {
    return this.service.getSchedule(year);
  }
}
