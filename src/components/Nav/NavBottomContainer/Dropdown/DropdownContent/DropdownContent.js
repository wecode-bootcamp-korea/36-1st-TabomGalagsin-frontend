import Categories from './Categories/Categories';
import ColorPallette from './ColorPallette/ColorPallette';
import './DropdownContent.scss';

function DropdownContent({ title }) {
  const titleList = {
    Categories: <Categories />,
    Colour: <ColorPallette />,
  };
  return <div className="DropdownContent">{titleList[title]}</div>;
}

export default DropdownContent;
