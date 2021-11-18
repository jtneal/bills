import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Payment } from '@bills/common';
import * as dayjs from 'dayjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  constructor(private readonly http: HttpClient) {}

  public getSchedule(): Observable<Payment[]> {
    return this.http.get<Payment[]>(`/api/accounts/schedule/${dayjs().add(1, 'year').year()}`);
  }
}
