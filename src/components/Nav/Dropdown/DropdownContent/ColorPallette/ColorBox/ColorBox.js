import './ColorBox.scss';

const ColorBox = ({ color, name }) => {
  return (
    <div>
      <div className="colorBox" style={{ backgroundColor: color }}>
        <font>{name}</font>
      </div>
    </div>
  );
};

export default ColorBox;
