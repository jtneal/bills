import { Component } from '@angular/core';
import { Payment } from '@bills/common';

import { ScheduleService } from './schedule.service';

@Component({
  selector: 'bills-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent {
  public displayedColumns = ['account', 'amount', 'dueDate', 'paidDate', 'method'];
  public schedule$ = this.service.getSchedule();

  public constructor(private readonly service: ScheduleService) {}

  public getScheduleForExcel(schedule: Payment[]): string {
    return schedule
      .map((payment) => {
        return `${payment.account}\t${payment.amount}\t${payment.dueDate}\t${payment.paidDate}\t${payment.method}`;
      })
      .join('\n');
  }
}
