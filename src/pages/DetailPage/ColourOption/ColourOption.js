import './ColourOption.scss';

function ColourOption({ color, index, setSelectColour, changeColor, colorId }) {
  return (
    <div className="colourOption">
      <button
        className={index === 0 ? 'selectedColour' : 'nonSelectedColour'}
        onClick={() => {
          setSelectColour(prev => prev + 1);
          changeColor(index);
        }}
      >
        <div
          className={index === 0 ? 'circle' : 'circle nonSelected'}
          style={{ backgroundColor: color }}
        />
        <font>{color}</font>
      </button>
    </div>
  );
}

export default ColourOption;
