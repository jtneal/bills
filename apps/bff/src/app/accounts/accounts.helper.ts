import { Cadence, CadenceConfig } from '@bills/common';

export const getCadenceConfig = (cadence: Cadence): CadenceConfig => {
  switch (cadence) {
    case Cadence.weekly:
      return { step: 1, unit: 'week' };
    case Cadence.biweekly:
      return { step: 2, unit: 'week' };
    case Cadence.monthly:
      return { step: 1, unit: 'month' };
    case Cadence.every3Months:
      return { step: 3, unit: 'month' };
    case Cadence.yearly:
      return { step: 1, unit: 'year' };
    case Cadence.every5Years:
      return { step: 5, unit: 'year' };
  }
};
