import './ItemList.scss';

const ItemList = ({ src, name, alt }) => {
  return (
    <li className="ItemList">
      <img className="icon" src={src} alt={alt} />
      {name}
    </li>
  );
};

export default ItemList;
