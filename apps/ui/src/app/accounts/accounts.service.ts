import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from '@bills/common';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  constructor(private readonly http: HttpClient) {}

  public getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>('/api/accounts');
  }
}
