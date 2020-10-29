import { BaseAction, TableCalculate } from '../common'

export type TableCalculateState = TableCalculate;

export const tableCalculateReducer = (
  state: TableCalculateState = {
    year: 1,
    carPrice: 0,
    borrowingPrice: 0,
    prepayPercent: 0,
  },
  action: BaseAction
) => {
  switch (action.type) {
    case 'CALCULATE_COMPLETED':
      console.log(state)
      console.log(action.payload)
      return { ...state, ...action.payload };;
  }
  return state;
};