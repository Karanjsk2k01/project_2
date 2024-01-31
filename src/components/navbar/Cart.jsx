import Modal from '../../UI/Modal'
import CartItem from './CartItem';
import './Cart.css'
import { useContext } from 'react';
import CartContext from '../../Store/Context';

const Cart = (props) => {

  // const dummyData = [
  //   {
  //     id: 'm1',
  //     name: 'Adidas',
  //     description: 'Finest fish and veggies',
  //     price: 22.99,
  //   },

  // ];

  const contextValue = useContext(CartContext)

  const cartItems = (
    <ul className="cart-items">
      {
        contextValue?.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            size={item.size}
          />
        ))
      }
    </ul >
  );


  return (
    <>
      <Modal>
        {cartItems}
        <div className="total">
          <span className="subtotal">Total</span>
          <span className="subtotal"> $0</span>
        </div>
        <div className="actions">
          <button className='button--alt' onClick={props.onClose}>
            Close
          </button>
          <button className='button--order' >Order</button>
        </div>
      </Modal >

    </>
  );
};

export default Cart;