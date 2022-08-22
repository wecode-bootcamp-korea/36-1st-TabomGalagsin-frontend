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
      {isMenuOpened &&
        list.map(subMenu => {
          return (
            isMenuOpened && (
              <div key={subMenu}>
                <input type="checkbox" className="filter" />
                {subMenu}
              </div>
            )
          );
        })}
    </div>
  );
}

export default FilterMenu;
