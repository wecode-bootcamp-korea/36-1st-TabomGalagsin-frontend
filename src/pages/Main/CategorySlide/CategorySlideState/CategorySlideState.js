import React from 'react';
import './CategorySlideState.scss';

function SlideState({
  categoryPosition,
  listPosition,
  length,
  mappingArrayLastIndex,
  firstPosition,
  stateColor,
}) {
  return (
    <li
      className={`slideState  ${stateColor} ${
        listPosition + firstPosition ===
        (categoryPosition % length < firstPosition
          ? (categoryPosition % length) + length
          : categoryPosition % length > mappingArrayLastIndex + firstPosition
          ? (categoryPosition % length) - length
          : categoryPosition % length)
          ? `positionNow`
          : ''
      }`}
    />
  );
}
export default SlideState;
