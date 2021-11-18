import { Cadence } from './cadence';

export interface Account {
  account: string;
  amount: number;
  cadence: Cadence;
  firstDueDate: string;
  method: string;
  notes: string;
}
