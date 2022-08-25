import React from 'react';
import './CartSlideState.scss';

function CartSlideState({ index, stateNow }) {
  return <li className={`state ${index === stateNow ? 'stateNow' : ''}`} />;
}

export default CartSlideState;
