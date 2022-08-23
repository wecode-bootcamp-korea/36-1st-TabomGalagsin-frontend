import './ColourOption.scss';

function ColourOption({ color, id }) {
  return (
    <button className={id === 0 ? 'selectedColour' : 'nonSelectedColour'}>
      <div
        className={id === 0 ? 'circle' : 'circle nonSelected'}
        style={{ backgroundColor: color }}
      />
      <font>{color}</font>
    </button>
  );
}

export default ColourOption;
