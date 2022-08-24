import { useState } from 'react';
import './SizeOption.scss';

function SizeOption({ size, id, click, setClick }) {
  // const [clicked, setClicked] = useState(1);

  const handleClick = () => {
    setClick(!click);
    console.log(click);
    // setClicked(target.id);
  };
  return (
    <button
      id={id}
     {click[id] === true ? 'size' : 'clickedSize'}
      onClick={handleClick}
    >
      {size}
    </button>
  );
}

export default SizeOption;
