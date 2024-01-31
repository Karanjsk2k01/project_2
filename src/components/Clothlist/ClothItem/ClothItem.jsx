import React, { useState, useContext } from 'react';
import CartContext from '../../../Store/Context';
import './ClothItem.css';

const ClothItem = (props) => {
  const [amount, setAmount] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');

  const cartContext = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const selectSizeHandler = (size) => {
    if (selectedSize === size) {
      setSelectedSize('');
    } else {
      setSelectedSize(size);
    }
  };


  const addToCartHandler = () => {
    if (!selectedSize) {
      return;
    }

    const item = {
      id: props.id,
      name: props.name,
      price: props.price,
      amount: 1,
      size: selectedSize,
    };

    // Check if the same product with the selected size is already in the cart
    const existingItemIndex = cartContext.items.findIndex(
      (existingItem) => existingItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      // Update the amount for the existing item with the selected size
      const updatedItems = [...cartContext.items];
      const existingItem = updatedItems[existingItemIndex];
      existingItem.size[selectedSize] = (existingItem.size[selectedSize] || 0) + 1;
      existingItem.amount += 1;
      cartContext.addItem(existingItem, selectedSize);

    } else {
      // Add a new item to the cart
      const newItem = {
        ...item,
        size: {
          [selectedSize]: 1,
        },
      };

      cartContext.addItem(newItem, selectedSize, item.price);
    }

    setSelectedSize('');
  };


  const sizes = Object.keys(props.sizes).map((size) => (
    <div
      key={size}
      className={`${'size'} ${selectedSize === size ? 'selected' : ''}`}
      onClick={() => selectSizeHandler(size)}
    >
      <span>{size}</span>
      <span>-{props.sizes[size]}</span>
    </div>
  ));

  return (
    <li className="cloth">
      <div className="wrapper">
        <div className="wrappersection">
          <h3 className="name">{props.name}</h3>
          <div className="description">{props.description}</div>
          <div className="price">{price}</div>
        </div>
      </div>
      <div className="sizesection">
        <h4>Select Size</h4>
        {sizes}
      </div>

      <div className="amount">
        <div className="button">
          <button onClick={addToCartHandler}>+ Add</button>
        </div>
      </div>
    </li>
  )
};

export default ClothItem;
