import { Link } from 'react-router-dom';
import ItemList from './ItemList/ItemList';
import './Categories.scss';

const Categories = () => {
  return (
    <div className="categories">
      <ul>
        {categoryData.map(item => (
          <Link key={item.id} to={`/categories/${item.alt}`}>
            <ItemList
              key={item.id}
              alt={item.alt}
              src={item.src}
              name={item.name}
            />
          </Link>
        ))}
      </ul>
      <img
        className="categoryImg"
        alt="people"
        src="https://images.unsplash.com/photo-1481016570479-9eab6349fde7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGZsaXAlMjBmbG9wc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
      />
    </div>
  );
};

export default Categories;

const categoryData = [
  {
    id: 1,
    alt: 'flipflops',
    src: 'images/Nav/flipflops.png',
    name: 'Flipflops',
  },
  {
    id: 2,
    alt: 'Sneakers',
    src: 'images/Nav/sneakers.png',
    name: 'Sneakers',
  },
  {
    id: 3,
    alt: 'high-heels',
    src: 'images/Nav/high-heel.png',
    name: 'high-heel',
  },
  {
    id: 4,
    alt: 'bag',
    src: 'images/Nav/backpack.png',
    name: 'Bag',
  },
  {
    id: 5,
    alt: 'chlothes',
    src: 'images/Nav/tshirt.png',
    name: 'Clothes',
  },
  {
    id: 6,
    alt: 'accessories',
    src: 'images/Nav/accessory.png',
    name: 'Accessories',
  },
];
