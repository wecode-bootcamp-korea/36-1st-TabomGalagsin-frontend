import React from 'react';
import './SlideState.scss';

function SlideState({ slidePosition, position, stateColor }) {
  return (
    <li
      className={`slideState ${
        position === slidePosition ? 'positionNow' : null
      } ${position === slidePosition ? stateColor + 'P' : null}`}
    />
  );
}

export default SlideState;
