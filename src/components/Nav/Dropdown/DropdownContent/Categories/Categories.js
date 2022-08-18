import ItemList from './ItemList/ItemList';
import './Categories.scss';

const Categories = () => {
  return (
    <ul className="Categories">
      {categoryData.map(item => (
        <ItemList
          key={item.id}
          alt={item.alt}
          src={item.src}
          name={item.name}
        />
      ))}
    </ul>
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
