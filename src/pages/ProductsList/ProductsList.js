import FilterMenu from './FilterMenu/FilterMenu.js';
import './ProductsList.scss';

function ProductsList() {
  return (
    <div className="productsList">
      <div className="listNav">
        <div className="breadCrumps">빵</div>
        <div className="orderContainer">order</div>
      </div>

      <aside className="filterAside">
        {MENU_LIST.map(({ title, list }) => {
          return <FilterMenu key={title} title={title} list={list} />;
        })}
      </aside>
      <section className="listContainer">list</section>
    </div>
  );
}

export default ProductsList;

const MENU_LIST = [
  { title: '그림 물감', list: ['노란색', '푸른', '베이지', '하얀색', 'ㅇㅇ'] },
  { title: '느낌', list: ['좋음', '나쁨', '적당'] },
  {
    title: '사이즈',
    list: ['Free(Man)', 'Free(Woman)', 'One'],
  },
];
