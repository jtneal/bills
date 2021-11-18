export enum Cadence {
  weekly = 'Weekly',
  biweekly = 'Biweekly',
  monthly = 'Monthly',
  every3Months = 'Every 3 Months',
  yearly = 'Yearly',
  every5Years = 'Every 5 Years',
}

export interface CadenceConfig {
  step: number;
  unit: string;
}
