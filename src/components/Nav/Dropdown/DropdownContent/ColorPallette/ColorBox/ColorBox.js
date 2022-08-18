import './ColorBox.scss';

const ColorBox = ({ color, name }) => {
  return (
    <div className="ColorBox">
      <div className="colorBoxes" style={{ backgroundColor: color }}>
        <font>{name}</font>
      </div>
    </div>
  );
};

export default ColorBox;
