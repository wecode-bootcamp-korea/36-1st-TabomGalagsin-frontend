import React from 'react';
import NavTopContainer from './NavTopContainer/NavTopContainer';
import NavBottomContainer from './NavBottomContainer/NavBottomContainer';
import './Nav.scss';

function Nav({ color }) {
  return (
    <nav className="nav">
      <NavTopContainer />
      <NavBottomContainer color={color} />
    </nav>
  );
}
export default Nav;
