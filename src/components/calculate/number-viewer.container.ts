import { connect } from 'react-redux';
import { NumberSetterComponent } from './number-viewer.component';
import { State } from '../../reducers';
import { BaseAction } from '../../common'

const mapStateToProps = (state: State) => ({
  numberCollection: state.numberCollection,
});

const numberRequestStartAction = (): BaseAction => ({
  type: 'GET_NUMBER_REQUEST_START',
  payload: {},
});

const mapDispatchToProps = (dispatch: any) => ({
  onRequestNewNumber: () => dispatch(numberRequestStartAction()),
});

export const NumberSetterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NumberSetterComponent);