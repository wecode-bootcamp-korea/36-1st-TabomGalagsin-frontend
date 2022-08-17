import ColorBox from './ColorBox/ColorBox';
import './ColorPallette.scss';

const ColorPallette = () => {
  return (
    <div className="ColorPalette">
      <div className="colorBoxContainer">
        {colorMockData.map(box => (
          <ColorBox key={box.id} color={box.color} name={box.name} />
        ))}
      </div>
      <div className="colorBoxContainer">
        {colorMockData2.map(box => (
          <ColorBox key={box.id} color={box.color} name={box.name} />
        ))}
      </div>
    </div>
  );
};

export default ColorPallette;

const colorMockData = [
  { id: 1, color: 'red', name: 'Red' },
  { id: 2, color: 'orange', name: 'Orange' },
  { id: 3, color: 'yellow', name: 'Yellow' },
  { id: 4, color: 'green', name: 'Green' },
];

const colorMockData2 = [
  { id: 5, color: 'blue', name: 'Blue' },
  { id: 6, color: 'purple', name: 'Purple' },
  { id: 7, color: 'black', name: 'Black' },
  { id: 8, color: 'white', name: 'White' },
];
