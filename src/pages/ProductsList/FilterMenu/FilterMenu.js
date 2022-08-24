import { useState } from 'react';
import './FilterMenu.scss';

function FilterMenu({ title, list, handleChangeFilter }) {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const handleClickOpenBtn = e => setIsMenuOpened(prev => !prev);

  const handleCheckBox = e => {
    clickCheck(e.target);
    handleChangeFilter(e);
  };

  function clickCheck(target) {
    document
      .querySelectorAll(`input[type=checkbox]`)
      .forEach(el => (el.checked = false));

    target.checked = true;
  }

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
              name="orderCheckBox"
              onChange={e => handleCheckBox(e)}
              data-filtertype={title}
            />
            <label htmlFor="check" />
            <span>{subMenu}</span>
          </div>
        );
      })}
    </div>
  );
}

export default FilterMenu;
