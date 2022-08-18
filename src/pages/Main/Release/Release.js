import Product from '../../../components/Product/Product';

import './release.scss';

function Release() {
  return (
    <div className="release">
      <div className="header">
        <h1 className="title">Release</h1>
        <button className="linkButton">
          <span>더 많은 제품 보기</span>
          <i className="fa-solid fa-angle-right fa-lg" />
        </button>
      </div>
      <div className="carouselContainer">
        {PRODUCTS.map(product => {
          const { id, description, price, imgUrl, colorList, sizeList } =
            product;
          return (
            <Product
              key={id}
              description={description}
              price={price}
              imgUrl={imgUrl}
              colorList={colorList}
              sizeList={sizeList}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Release;

const PRODUCTS = [
  {
    id: 1,
    description: 'Havaianas 슬림 스퀘어 로고 메탈릭 플립플롭',
    price: 'BRL 49.99',
    imgUrl:
      'http://drive.google.com/uc?export=view&id=10PS1GO2GS-jeoFSNyJucFV1KilLH4si9',
    colorList: ['blue', 'red', 'white', 'black'],
    sizeList: ['male', 'female'],
  },
  {
    id: 2,
    description: 'Havaianas Light 솔리드 플립플랍',
    price: 'BRL 49.99',
    imgUrl:
      'http://drive.google.com/uc?export=view&id=1QxEJrqlPQjlwEbGzh8qE7LVSAmjP5e1I',
    colorList: ['red', 'white', 'black'],
    sizeList: ['male'],
  },
  {
    id: 3,
    description: 'Havaianas Slide Stradi 플립플랍',
    price: 'BRL 49.99',
    imgUrl:
      'http://drive.google.com/uc?export=view&id=1woefXrsz3EXtFY0yaQZsOCBIzG8oJW4T',
    colorList: ['blue', 'red'],
    sizeList: ['male', 'female'],
  },
  {
    id: 4,
    description: 'Havaianas 멋진 모자',
    price: 'BRL 49.99 - BRL 99.99',
    imgUrl:
      'http://drive.google.com/uc?export=view&id=1Y5TbNc58aYSC1ZqyO70vRfImHdH21BDA',
    colorList: ['blue'],
    sizeList: ['female'],
  },
];
