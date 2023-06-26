import { connect } from "react-redux";
import { TableCalculateComponent } from "./table-calculate.component";
import { State } from "../../reducers";
import { BaseAction } from "../../common";

const mapStateToProps = (state: State) => ({
  tableCalculate: state.tableCalculate,
});

const calculate = (data: any): BaseAction => ({
  type: "CALCULATE",
  payload: data,
});

const mapDispatchToProps = (dispatch: any) => ({
  onRefreshCalculate: (data: any) => dispatch(calculate(data)),
});

export const TableCalculateContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TableCalculateComponent);
