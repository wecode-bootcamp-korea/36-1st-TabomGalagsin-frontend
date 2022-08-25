import './SizeOption.scss';

function SizeOption({
  size,
  id,
  click,
  setClick,
  setIsClicked,
  handleClickButton,
}) {
  const handleClick = () => {
    setClick({ 1: false, 2: false, [id]: true });
    setIsClicked(true);
  };

  return (
    <div className="sizeOption">
      <button
        id={id}
        className={
          click[id] ? 'clickedSize flipflopCursor' : 'size flipflopCursor'
        }
        onClick={() => {
          handleClick();
          handleClickButton('sizeId', id);
        }}
      >
        {size}
      </button>
    </div>
  );
}

export default SizeOption;
