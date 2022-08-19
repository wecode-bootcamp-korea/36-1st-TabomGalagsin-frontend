import React from 'react';
import './SlideState.scss';

function SlideState({ slidePosition, position, stateColor }) {
  return (
    <li
      className={`slideState ${
        position === slidePosition ? 'positionNow' : ''
      } ${position === slidePosition ? stateColor + 'P' : ''}`}
    />
  );
}

export default SlideState;
