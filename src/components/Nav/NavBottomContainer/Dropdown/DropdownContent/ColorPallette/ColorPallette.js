import { Link } from 'react-router-dom';
import ColorBox from './ColorBox/ColorBox';
import './ColorPallette.scss';

const ColorPallette = () => {
  return (
    <div className="colorPalette">
      <div className="colorBoxContainer">
        {COLOUR_MOCK_DATA.map(box => (
          <Link
            key={box.id}
            to={`/categories/2/color/${box.id}`}
            className="linkComponent"
          >
            <ColorBox
              key={box.id}
              color={box.color}
              name={box.name}
              id={box.id}
            />
          </Link>
        ))}
      </div>
      <div className="colorBoxContainer">
        {COLOUR_MOCK_DATA2.map(box => (
          <Link
            key={box.id}
            to={`/categories/2/color/${box.id}`}
            className="linkComponent"
          >
            <ColorBox
              key={box.id}
              color={box.color}
              name={box.name}
              id={box.id}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ColorPallette;

const COLOUR_MOCK_DATA = [
  { id: 8, color: 'red', name: 'Red' },
  { id: 2, color: 'orange', name: 'Orange' },
  { id: 3, color: 'yellow', name: 'Yellow' },
  { id: 4, color: 'green', name: 'Green' },
];

const COLOUR_MOCK_DATA2 = [
  { id: 5, color: 'blue', name: 'Blue' },
  { id: 6, color: 'purple', name: 'Purple' },
  { id: 7, color: 'black', name: 'Black' },
  { id: 1, color: 'white', name: 'White' },
];
