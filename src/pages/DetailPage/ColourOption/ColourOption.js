import './ColourOption.scss';

function ColourOption({ color, idex, setSelectColour, changeColor }) {
  return (
    <button
      className={idex === 0 ? 'selectedColour' : 'nonSelectedColour'}
      onClick={() => {
        setSelectColour(prev => prev + 1);
        changeColor(idex);
      }}
    >
      <div
        className={idex === 0 ? 'circle' : 'circle nonSelected'}
        style={{ backgroundColor: color }}
      />
      <font>{color}</font>
    </button>
  );
}

export default ColourOption;
