import { combineReducers } from 'redux';

import {
  numberCollectionReducer,
  NumberCollectionState,
} from './number-collection.reducer';

import {
  tableCalculateReducer,
  TableCalculateState,
} from './table-calculate.reducer';

export interface State {
  numberCollection: NumberCollectionState;
  tableCalculate: TableCalculateState;
}

export const rootReducers = combineReducers<State>({
  numberCollection: numberCollectionReducer,
  tableCalculate: tableCalculateReducer,
});