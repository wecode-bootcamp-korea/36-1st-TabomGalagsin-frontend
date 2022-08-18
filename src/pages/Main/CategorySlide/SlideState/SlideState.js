import React from 'react';
import './SlideState.scss';

function SlideState({
  categoryPosition,
  listPosition,
  length,
  mappingArrayLastIndex,
  firstPosition,
}) {
  return (
    <li
      className={`slideState ${
        listPosition + firstPosition ===
        (categoryPosition % length < firstPosition
          ? (categoryPosition % length) + length
          : categoryPosition % length > mappingArrayLastIndex + firstPosition
          ? (categoryPosition % length) - length
          : categoryPosition % length)
          ? 'positionNow'
          : ''
      }`}
    />
  );
}
export default SlideState;
