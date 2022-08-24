import { useState } from 'react';
import Filter from './Filter/Filter';
import './FilterMenu.scss';

function FilterMenu({ title, list, handleChangeFilter }) {
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
          <Filter
            key={subMenu}
            handleChangeFilter={handleChangeFilter}
            isMenuOpened={isMenuOpened}
            subMenu={subMenu}
            title={title}
          />
        );
      })}
    </div>
  );
}

export default FilterMenu;
