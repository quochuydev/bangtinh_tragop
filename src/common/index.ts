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
export interface PeriodLine {
  period: string;
  recurring_number: number | null;
  interest: number | null;
  origin: number | null;
  debt: number | null;
}

export interface TableCalculate {
  month: number;
  carPrice: number;
  borrowingPrice: number;
  prepayPercent: number;
  rows: PeriodLine[];
  precentBankBefore: number;
  precentBankAfter: number;
  discountMonths: number;
}

// Loan calculation constants
export const LOAN_CONSTANTS = {
  DEFAULT_INTEREST_RATE_FIRST_6_MONTHS: 0.0699, // 6.99%
  DEFAULT_INTEREST_RATE_AFTER: 0.1085, // 10.85%
  PROMOTIONAL_PERIOD_MONTHS: 6,
} as const;

// Month options for loan terms
export const MONTH_OPTIONS = [
  { value: 12, name: '1 năm (12 tháng)' },
  { value: 24, name: '2 năm (24 tháng)' },
  { value: 36, name: '3 năm (36 tháng)' },
  { value: 48, name: '4 năm (48 tháng)' },
  { value: 60, name: '5 năm (60 tháng)' },
  { value: 72, name: '6 năm (72 tháng)' },
  { value: 84, name: '7 năm (84 tháng)' },
] as const;
