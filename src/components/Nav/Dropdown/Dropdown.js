import React, { useState } from 'react';
import DropdownContent from './DropdownContent/DropdownContent';
import './Dropdown.scss';

function Dropdown() {
  const [menuMouseEnter, setMenuMouseEnter] = useState('Categories');

  return (
    <div className="Dropdown">
      <div className="dropdownMenu">
        <div className="dropdownCategory">
          <ul>
            <li
              className="arrow"
              onMouseOver={() => {
                setMenuMouseEnter('Categories');
              }}
            >
              Categories
              {menuMouseEnter === 'Categories' && (
                <i className="fa-solid fa-angle-right arrow" />
              )}
            </li>
            <li
              className="arrow"
              onMouseOver={() => {
                setMenuMouseEnter('Colour');
              }}
            >
              Colour
              {menuMouseEnter === 'Colour' && (
                <i className="fa-solid fa-angle-right arrow" />
              )}
            </li>
          </ul>
        </div>
        <DropdownContent title={menuMouseEnter} />
      </div>
    </div>
  );
}

export default Dropdown;
