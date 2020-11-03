import { BaseAction, TableCalculate, PeriodLine } from '../common'
import * as _ from 'lodash';

export type TableCalculateState = TableCalculate;

export const tableCalculateReducer = (
  state: TableCalculateState = {
    month: 24,
    carPrice: 1200000000,
    borrowingPrice: 240000000,
    prepayPercent: 0,
    rows: [],
    precentBankBefore: 0.0699,
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
        if (_.isEmpty(action.payload) || action.payload['borrowingPrice'] || action.payload['carPrice']) {
          data.prepayPercent = (data.borrowingPrice / data.carPrice) * 100;
        }
      }
      let pricePerMonth = data.borrowingPrice / data.month;

      data.rows = [createData('', null,null, null, data.borrowingPrice)];

      let total_recurring_number: number = 0;
      let total_interest: number = 0;
      let total_origin: number = 0;

      for (let i = 1; i <= data.month; i++) {
        let data_row = {
          precentBank: 0, debt_last: 0, interest: 0, recurring_number: 0, origin: 0, debt: 0,
        };
        if (i <= data.discountMonths) {
          data_row.precentBank = data.precentBankBefore;
        } else {
          data_row.precentBank = data.precentBankAfter;
        }
        data_row.debt_last = data.rows[i - 1]['debt'];
        data_row.interest = data_row.debt_last * data_row.precentBank / 12;

        data_row.origin = pricePerMonth;
        if (i == data.month) {
          data_row.origin = data_row.debt_last;
        }

        data_row.recurring_number = data_row.interest + data_row.origin;
        data_row.debt = data_row.debt_last - data_row.origin;
        data_row.debt = roundNumber(data_row.debt);

        total_recurring_number += data_row.recurring_number;
        total_interest += data_row.interest;
        total_origin += data_row.origin;
        let row = createData(String(i), roundNumber(data_row.recurring_number), roundNumber(data_row.interest), roundNumber(data_row.origin), data_row.debt);
        data.rows.push(row);
      }
      data.rows.push(createData('TOTAL', roundNumber(total_recurring_number), roundNumber(total_interest), roundNumber(data.rows[0]['debt']), null));
      return data;
    default:
      return state;
  }
};

function roundNumber(input: number) {
  return Math.round(input * 1) / 1;
}

function createData(period: string, recurring_number: number | null, interest: number | null, origin: number | null, debt: number | null) {
  return { period, recurring_number, interest, origin, debt };
}
