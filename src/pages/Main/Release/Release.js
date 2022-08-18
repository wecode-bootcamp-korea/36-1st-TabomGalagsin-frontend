import Product from '../../../components/Product/Product';

import './release.scss';

function Release() {
  return (
    <div className="release">
      <div className="header">
        <h1 className="title">Release</h1>
        <button className="linkButton">
          더 많은 제품 보기&nbsp;&nbsp;&nbsp;>
        </button>
      </div>
      <div className="carouselContainer">
        {products.map(product => (
          <Product
            key={product.id}
            tag={product.tag}
            desc={product.desc}
            price={product.price}
            imgUrl={product.imgUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Release;

const products = [
  {
    id: 1,
    tag: 'young',
    desc: 'Havaianas 슬림 스퀘어 로고 메탈릭 플립플롭',
    price: 'BRL 49.99',
    imgUrl:
      'http://drive.google.com/uc?export=view&id=10PS1GO2GS-jeoFSNyJucFV1KilLH4si9',
  },
  {
    id: 2,
    tag: 'young',
    desc: 'Havaianas Light 솔리드 플립플랍',
    price: 'BRL 49.99',
    imgUrl:
      'http://drive.google.com/uc?export=view&id=1QxEJrqlPQjlwEbGzh8qE7LVSAmjP5e1I',
  },
  {
    id: 3,
    tag: 'young',
    desc: 'Havaianas Slide Stradi 플립플랍',
    price: 'BRL 49.99',
    imgUrl:
      'http://drive.google.com/uc?export=view&id=1woefXrsz3EXtFY0yaQZsOCBIzG8oJW4T',
  },
  {
    id: 4,
    tag: 'young',
    desc: 'Havaianas 멋진 모자',
    price: 'BRL 49.99 - BRL 99.99',
    imgUrl:
      'http://drive.google.com/uc?export=view&id=1Y5TbNc58aYSC1ZqyO70vRfImHdH21BDA',
  },
];
