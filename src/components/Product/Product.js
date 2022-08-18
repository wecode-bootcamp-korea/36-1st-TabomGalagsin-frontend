import './Product.scss';

function Product({ tag, desc, price, imgUrl }) {
  return (
    <div className="product">
      <img alt="product" src={imgUrl} />
      <div className="tagContainer">
        <div className={`tag ${tag}`}>{tag}</div>
      </div>
      <p className="desc">{desc}</p>
      <p className="price">{price}</p>
      <div className="colorPickers">
        <button style={{ backgroundColor: 'blue' }} />
        <button style={{ backgroundColor: 'blue' }} />
        <button style={{ backgroundColor: 'blue' }} />
        <button style={{ backgroundColor: 'blue' }} />
      </div>
      <div className="sizePickers">
        <button>male</button>
        <button>female</button>
      </div>
      <button className="cartBtn">장바구니에 담기</button>
    </div>
  );
}

export default Product;
