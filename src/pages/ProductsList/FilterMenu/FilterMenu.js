import { useState } from 'react';
import './FilterMenu.scss';

function FilterMenu({ title, list }) {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const handleClickOpenBtn = e => setIsMenuOpened(prev => !prev);

  return (
    <div key={title} className={`filterMenu ${isMenuOpened ? 'openMenu' : ''}`}>
      <div onClick={handleClickOpenBtn} className="filterTitleContainer">
        <span className="filterTitle">{title}</span>
        <i
          className={`fa-solid fa-chevron-up ${
            isMenuOpened ? 'open' : 'close'
          }`}
        />
      </div>
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
            {/* <div className="alterCheckBox" /> */}
            <span>{subMenu}</span>
          </div>
        );
      })}
    </div>
  );
}

export default FilterMenu;
