import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { TableCalculateComponent } from './table-calculate.component';
import { State } from '../../reducers';
import { ActionTypes, CalculateAction, TableCalculate } from '../../common';

const mapStateToProps = (state: State) => ({
  tableCalculate: state.tableCalculate,
});

const calculate = (data: Partial<TableCalculate>): CalculateAction => ({
  type: ActionTypes.CALCULATE,
  payload: data,
});

const mapDispatchToProps = (dispatch: Dispatch<CalculateAction>) => ({
  onRefreshCalculate: (data: Partial<TableCalculate>) => dispatch(calculate(data)),
});

export const TableCalculateContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TableCalculateComponent);
