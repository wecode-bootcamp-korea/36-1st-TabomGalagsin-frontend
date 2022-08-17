import React from 'react';
import './SlideState.scss';

function SlideState({ categoryPosition, position }) {
  const match = element => element === categoryPosition;

  return (
    <li
      className={`slideState ${position.some(match) ? 'positionNow' : null}`}
    />
  );
}

export default SlideState;
