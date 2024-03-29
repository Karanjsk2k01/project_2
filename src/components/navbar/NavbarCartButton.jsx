import React, { useContext, useState } from 'react'
import './NavbarCartButton.css'
import Cart from './Cart';
import CartIcon from './CartIcon';
import CartContext from '../../Store/Context';

const NavbarCartButton = () => {
  const [overlay, setoverlay] = useState(false);


  const cartValue = useContext(CartContext)

  const clickHandler = () => {
    setoverlay(true);
  }

  const closeHandler = () => {
    setoverlay(false);
  }

  const totalQuantity = cartValue.items.reduce((total, i) => {
    return total + i.amount
  }, 0)

  return (
    <div>
      {overlay && <Cart onClose={closeHandler} />}
      <button className="button" onClick={clickHandler}>
        <span className="icons">
          <CartIcon />
        </span>
        <span>Cart</span>
        <span className="badge">{totalQuantity}</span>
      </button>
    </div >
  )

}

export default NavbarCartButton