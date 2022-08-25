import './SizeOption.scss';

function SizeOption({ size, id, click, setClick, setIsClicked }) {
  const handleClick = () => {
    setClick({ 1: false, 2: false, [id]: true });
    setIsClicked(true);
  };

  return (
    <div className="sizeOption">
      <button
        id={id}
        className={click[id] ? 'clickedSize' : 'size'}
        onClick={handleClick}
      >
        {size}
      </button>
    </div>
  );
}

export default SizeOption;
