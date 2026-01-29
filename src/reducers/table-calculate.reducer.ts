import { TableCalculate, ActionTypes, LOAN_CONSTANTS } from '../common';
import { calculateInstallmentSchedule } from '../utils/loanCalculations';
import type { UnknownAction } from 'redux';

export type TableCalculateState = TableCalculate;

const initialState: TableCalculateState = {
  month: 60,
  borrowingPrice: 0,
  prepayPercent: 0,
  rows: [],
  precentBankBefore: LOAN_CONSTANTS.DEFAULT_INTEREST_RATE_FIRST_6_MONTHS,
  precentBankAfter: LOAN_CONSTANTS.DEFAULT_INTEREST_RATE_AFTER,
  discountMonths: LOAN_CONSTANTS.PROMOTIONAL_PERIOD_MONTHS,
};

interface CalculateActionPayload {
  type: typeof ActionTypes.CALCULATE;
  payload: Partial<TableCalculate>;
}

type TableCalculateAction = CalculateActionPayload | UnknownAction;

export const tableCalculateReducer = (
  state: TableCalculateState = initialState,
  action: TableCalculateAction
): TableCalculateState => {
  if (action.type === ActionTypes.CALCULATE) {
    const calculateAction = action as CalculateActionPayload;
    const data = { ...state, ...calculateAction.payload };

    // Calculate installment schedule
    data.rows = calculateInstallmentSchedule({
      borrowingPrice: data.borrowingPrice,
      month: data.month,
      precentBankBefore: data.precentBankBefore,
      precentBankAfter: data.precentBankAfter,
      discountMonths: data.discountMonths,
    });

    return data;
  }

  return state;
};
