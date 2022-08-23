import { useState } from 'react';
import './FilterMenu.scss';

function FilterMenu({ title, list }) {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <div
      key={title}
      className="filterMenu"
      onClick={e => {
        if (e.target.className === 'filterMenu') {
          setIsMenuOpened(!isMenuOpened);
        }
      }}
    >
      {title}
      {list.map(subMenu => {
        return (
          <div
            className={`filter ${isMenuOpened ? 'active' : ''}`}
            key={subMenu}
          >
            <input
              type="checkbox"
              className="check"
              placeholder={subMenu}
              value={subMenu}
            />
            <label htmlFor="check" />
            <span className="checkNonSelect" />
            {subMenu}
          </div>
        );
      })}
    </div>
  );
}

export default FilterMenu;
