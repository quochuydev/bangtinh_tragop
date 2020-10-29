import { BaseAction, TableCalculate, PeriodLine } from '../common'

export type TableCalculateState = TableCalculate;

export const tableCalculateReducer = (
  state: TableCalculateState = {
    month: 12,
    carPrice: 1200000000,
    borrowingPrice: 240000000,
    prepayPercent: 0,
    rows: [],
    precentBankBefore: 0.699,
    precentBankAfter: 0.1085,
    discountMonths: 6

  },
  action: BaseAction
) => {
  switch (action.type) {
    case 'CALCULATE_COMPLETED':
      let data = { ...state, ...action.payload };
      data.rows = [];
      if (!data.carPrice) {
        data.prepayPercent = 0;
      } else {
        console.log(action.payload)
        if (action.payload['prepayPercent']) {
          data.borrowingPrice = (data.prepayPercent * data.carPrice) / 100;
        }
        if (action.payload['borrowingPrice'] || action.payload['carPrice']) {
          data.prepayPercent = (data.borrowingPrice / data.carPrice) * 100;
        }
      }
      data.rows = [createData(0, 0, 0, 0, 0)];
      for (let i = 1; i <= data.month; i++) {
        let data_row = {};
        if (i <= data.discountMonths) {
          data.precentBank = 0.699;
        } else {
          data.precentBank = 0.1085;
        }
        let row = createData(i, 0, 0, 0, 0);
        data.rows.push(row);
      }
      return data;
    default:
      return state;
  }
};

function createData(period: number, recurring_number: number, interest: number, origin: number, debt: number) {
  return { period, recurring_number, interest, origin, debt };
}
