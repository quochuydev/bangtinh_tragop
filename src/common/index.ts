// Action Types
export const ActionTypes = {
  CALCULATE: 'CALCULATE',
} as const;

export interface CalculateAction {
  type: typeof ActionTypes.CALCULATE;
  payload: Partial<TableCalculate>;
}

export type AppAction = CalculateAction;

// Data Types
export type CalculationType = 'declining' | 'pmt';

export interface PeriodLine {
  period: string;
  recurring_number: number | null;
  interest: number | null;
  origin: number | null;
  debt: number | null;
}

export interface TableCalculate {
  month: number;
  borrowingPrice: number;
  rows: PeriodLine[];
  precentBankBefore: number;
  precentBankAfter: number;
  discountMonths: number;
  calculationType: CalculationType;
}

// Loan calculation constants
export const LOAN_CONSTANTS = {
  DEFAULT_INTEREST_RATE_FIRST_6_MONTHS: 0.0699, // 6.99%
  DEFAULT_INTEREST_RATE_AFTER: 0.1085, // 10.85%
  PROMOTIONAL_PERIOD_MONTHS: 6,
} as const;

export const PMT_DEFAULTS = {
  borrowingPrice: 240000000,
  month: 24,
  annualRate: 0.145, // 14.5%
} as const;
