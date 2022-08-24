import { useState } from 'react';

function Filter({ isMenuOpened, subMenu, title, handleChangeFilter }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBox = e => {
    if (isChecked) {
      setIsChecked(false);
      return;
    }
    clickCheck(e.target);
    handleChangeFilter(e);
  };

  function clickCheck(target) {
    document
      .querySelectorAll(`input[type=checkbox]`)
      .forEach(el => (el.checked = false));

    setIsChecked(true);
  }

  return (
    <div className={`filter ${isMenuOpened ? 'active' : ''}`} key={subMenu}>
      <input
        type="checkbox"
        className="check"
        placeholder={subMenu}
        value={subMenu}
        name="orderCheckBox"
        onChange={e => handleCheckBox(e)}
        data-filtertype={title}
        checked={isChecked}
      />
      <label htmlFor="check" />
      <span>{subMenu}</span>
    </div>
  );
}

export default Filter;
