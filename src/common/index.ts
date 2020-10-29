export interface BaseAction {
  type: string;
  payload: any;
}

export interface PeriodLine {
  period: number;
  recurring_number: number;
  interest: number;
  origin: number;
  debt: number;
  precentBank: number;
}

interface PeriodLines extends Array<PeriodLine>{}

export interface TableCalculate {
  month: number;
  carPrice: number;
  borrowingPrice: number;
  prepayPercent: number;
  rows: PeriodLines;
  precentBankBefore: number;
  precentBankAfter: number;
  discountMonths: number;
}