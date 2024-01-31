import Card from '../../UI/Card';
import ClothItem from './ClothItem/ClothItem';
import './AvailableCloth.css';

const DUMMY_CLOTHES = [
  {
    id: 'c1',
    itemName: 'T-shirt',
    description: 'Comfortable and casual',
    price: 19.99,
    sizes: {
      S: '36',
      M: '38',
      L: '40',
      XL: '42',
    },
  },
  {
    id: 'c2',
    itemName: 'Jeans',
    description: 'Classic denim for everyday wear',
    price: 49.99,
    sizes: {
      S: '30',
      M: '32',
      L: '34',
      XL: '36',
    },
  },
  {
    id: 'c3',
    itemName: 'Dress Shirt',
    description: 'Formal shirt for special occasions',
    price: 69.99,
    sizes: {
      S: '15',
      M: '16',
      L: '17',
      XL: '18',
    },
  },
  {
    id: 'c4',
    itemName: 'Sweater',
    description: 'Warm and stylish for cold weather',
    price: 59.99,
    sizes: {
      S: '38',
      M: '40',
      L: '42',
      XL: '44',
    },
  },
];

const AvailableCloth = () => {
  const ClothList = DUMMY_CLOTHES.map((item) => (
    <ClothItem
      key={item.id}
      id={item.id}
      name={item.itemName}
      description={item.description}
      price={item.price}
      sizes={item.sizes}
    />
  ));

  return (
    <section className="Cloth">
      <Card>
        <ul>{ClothList}</ul>
      </Card>
    </section >
  );
};

export default AvailableCloth;
