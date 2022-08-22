import './ItemList.scss';

const ItemList = ({ src, name, alt }) => {
  return (
    <li className="itemList">
      <img className="icon" src={src} alt={alt} />
      {name}
    </li>
  );
};

export default ItemList;
