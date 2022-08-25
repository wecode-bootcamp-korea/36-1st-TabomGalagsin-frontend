import React, { useState, useEffect } from 'react';
import NavTopContainer from './NavTopContainer/NavTopContainer';
import NavBottomContainer from './NavBottomContainer/NavBottomContainer';
import './Nav.scss';

function Nav({ color, cartedCount, setCartedCount }) {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = e => setScroll(e.currentTarget.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <nav
      className="nav"
      style={scroll < 32 ? { top: 0 - scroll } : { top: -32 }}
    >
      <NavTopContainer />
      <NavBottomContainer
        setCartedCount={setCartedCount}
        cartedCount={cartedCount}
        color={color}
      />
    </nav>
  );
}
export default Nav;
