import React from 'react';
import './SlideState.scss';

function SlideState({ slidePosition, position, stateColor }) {
  return (
    <li
      className={`slideState ${stateColor} ${
        position === slidePosition ? 'positionNow' : ''
      }`}
    />
  );
}

export default SlideState;
