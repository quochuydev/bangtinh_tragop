import * as React from 'react';

interface Props {
  onRequestNewNumber: () => void;
  numberCollection: number[];
}

export const NumberSetterComponent: React.FunctionComponent<Props> = props => (
  <div>
    <button onClick={props.onRequestNewNumber}>Request new number</button>
    <ul>
      {props.numberCollection.map(currentNumber => (
        <li key={currentNumber}>{currentNumber}</li>
      ))}
    </ul>
  </div>
);