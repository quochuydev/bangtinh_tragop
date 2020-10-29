export interface BaseAction {
  type: string;
  payload: any;
}

export interface TableCalculate {
  year: number;
  carPrice: number;
  borrowingPrice: number;
  prepayPercent: number;
}