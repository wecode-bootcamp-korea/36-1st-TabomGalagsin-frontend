import './Product.scss';

function Product({ tag, description, price, imgUrl, colorList, sizeList }) {
  return (
    <div className="product">
      <img alt="product" src={imgUrl} />
      {/* <div className="tagContainer"> */}
      {/* <div className={`tag ${tag}`}>{tag}</div> */}
      {/* </div> */}
      <p className="description">{description}</p>
      <p className="price">{price}</p>
      <div className="colorPickers">
        {colorList.map(color => (
          <button key={color} style={{ backgroundColor: color }} />
        ))}
      </div>
      <div className="sizePickers">
        {sizeList.map(size => (
          <button key={size}>{size}</button>
        ))}
      </div>
      <button className="cartBtn">장바구니에 담기</button>
    </div>
  );
}

export default Product;
