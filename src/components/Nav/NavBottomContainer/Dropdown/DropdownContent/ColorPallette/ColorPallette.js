import { useNavigate } from 'react-router-dom';
import { goToUrl } from '../../../../../../utils.js';
import ColorBox from './ColorBox/ColorBox';
import './ColorPallette.scss';

const ColorPallette = () => {
  const navigate = useNavigate();

  return (
    <div className="colorPalette">
      <div className="colorBoxContainer">
        {COLOUR_MOCK_DATA.map(box => (
          <div
            key={box.id}
            className="linkComponent flipflopCursor"
            onClick={() => goToUrl(navigate, `/categories/2/color/${box.id}`)}
          >
            <ColorBox
              key={box.id}
              color={box.color}
              name={box.name}
              id={box.id}
            />
          </div>
        ))}
      </div>
      <div className="colorBoxContainer">
        {COLOUR_MOCK_DATA2.map(box => (
          <div
            key={box.id}
            onClick={() => goToUrl(navigate, `/categories/2/color/${box.id}`)}
            className="linkComponent flipflopCursor"
          >
            <ColorBox
              key={box.id}
              color={box.color}
              name={box.name}
              id={box.id}
            />
          </div>
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
