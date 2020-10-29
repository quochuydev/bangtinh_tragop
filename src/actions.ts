import { BaseAction } from './common';

export const numberRequestCompletedAction = (
  numberGenerated: number
): BaseAction => ({
  type: 'GET_NUMBER_REQUEST_COMPLETED',
  payload: numberGenerated,
});