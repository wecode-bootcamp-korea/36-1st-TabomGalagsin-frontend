import React from 'react';
import './SlideState.scss';

function SlideState({ categoryPosition, listPosition, length }) {
  return (
    <li
      className={`slideState ${
        listPosition - 0.5 ===
        (categoryPosition % length < -0.5
          ? (categoryPosition % length) + 6
          : categoryPosition % length > 4.5
          ? (categoryPosition % length) - 6
          : categoryPosition % length)
          ? 'positionNow'
          : ''
      }`}
    />
  );
}
export default SlideState;
