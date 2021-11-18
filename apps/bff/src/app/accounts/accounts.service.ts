import { Account, Cadence, Payment } from '@bills/common';
import { Injectable } from '@nestjs/common';
import * as dayjs from 'dayjs';
import * as customParseFormat from 'dayjs/plugin/customParseFormat';
import { Observable, of } from 'rxjs';

import { getCadenceConfig } from './accounts.helper';

dayjs.extend(customParseFormat);

const data: Account[] = [];

@Injectable()
export class AccountsService {
  public getAccounts(): Observable<Account[]> {
    return of(data);
  }

  public getSchedule(year: number): Observable<Payment[]> {
    const payments: Payment[] = [];

    data.forEach((account) => {
      const config = getCadenceConfig(account.cadence);
      const firstDay = dayjs(account.firstDueDate, 'MM/DD/YYYY');

      if (firstDay.year() > year) {
        return;
      }

      for (let day = firstDay; day.year() <= year; day = day.add(config.step, config.unit)) {
        if (day.year() === year) {
          payments.push({
            account: account.account,
            amount: account.amount,
            dueDate: day.format('MM/DD/YYYY'),
            paidDate: '',
            method: account.method,
          });
        }
      }
    });

    payments.sort((a, b) =>
      a.dueDate === b.dueDate ? a.account.localeCompare(b.account) : a.dueDate.localeCompare(b.dueDate),
    );

    return of(payments);
  }
}
