import { connect } from 'react-redux';
import { NumberSetterComponent } from './number-viewer.component';
import { BaseAction } from '../../common'

const numberRequestStartAction = (): BaseAction => ({
  type: 'GET_NUMBER_REQUEST_START',
  payload: null,
});

const mapDispatchToProps = (dispatch: any) => ({
  onRequestNewNumber: () => dispatch(numberRequestStartAction()),
});

export const NumberSetterContainer = connect(
  null,
  mapDispatchToProps
)(NumberSetterComponent);