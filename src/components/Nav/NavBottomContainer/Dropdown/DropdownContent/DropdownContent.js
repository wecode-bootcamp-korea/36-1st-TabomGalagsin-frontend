import Categories from './Categories/Categories';
import ColorPallette from './ColorPallette/ColorPallette';
import './DropdownContent.scss';

function DropdownContent({ title }) {
  return (
    <div className="DropdownContent">
      <h2 className="title">{title}</h2>
      <hr />
      {title === 'Categories' && <Categories />}
      {title === 'Colour' && <ColorPallette />}
    </div>
  );
}

export default DropdownContent;
